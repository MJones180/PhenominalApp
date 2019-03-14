const fs = require('fs');
const jsonfile = require('jsonfile');
const _ = require('lodash');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const { s3 } = require('./aws');

// The current file layout
const fileTree = [];

// Recursive function to generate a file tree
const walk = (absoluteDir = __dirname, relativeDir = '.') => {
  // Loop through the children files and folders for the given directory
  fs.readdirSync(absoluteDir).forEach((name) => {
    // Absolute path of the current item
    const absolutePath = `${absoluteDir}/${name}`;
    // Relative path of the current item
    const relativePath = `${relativeDir}/${name}`;
    const stat = fs.statSync(absolutePath);
    // Continue walking if item is a folder
    if (stat && stat.isDirectory()) walk(absolutePath, relativePath);
    // Item is a file
    else {
      // Valid extensions
      const extensions = ['png', 'jpg', 'svg'];
      // Grab the file's extension
      const extension = _.split(name, '.')[1];
      // Save the file if it is a photo
      if (_.includes(extensions, extension)) fileTree.push(relativePath);
    }
  });
};

// Generate the file layout
walk();

// Location of the map file
const mapFile = `${__dirname}/map.json`;

// Create a copy of the current mapping
let mapping = _.clone(jsonfile.readFileSync(mapFile));

// Files added since last sync
const addedFiles = _.difference(fileTree, mapping);

// Files deleted since last sync
const deletedFiles = _.difference(mapping, fileTree);

// Remove leading './'
const toKey = file => _.slice(file, 2).join('');

// Return mimetype of file extension
const mimetype = (file) => {
  // Grab file's extension
  const extension = _.last(_.split(file, '.'));
  // Return corresponding mimetype
  if (extension == 'jpg' || extension == 'jpeg') return 'image/jpeg';
  if (extension == 'png') return 'image/png';
  if (extension == 'svg') return 'image/svg+xml';
};

// Update the map file
const updateMap = data => jsonfile.writeFileSync(mapFile, data, { spaces: 2 });

// Upload a file
const addFile = (file) => {
  // Optimize image
  const optimize = async image => (
    imagemin.buffer(image, {
      // Different image type optimizations
      plugins: [
        imageminMozjpeg(),
        imageminPngquant(),
        imageminSvgo(),
      ],
    })
  );
  // Read the file in from the filesystem
  fs.readFile(file, async (err, fileContents) => {
    // Upload the file
    s3.upload({
      // Make viewable to all
      ACL: 'public-read',
      // Path and name of file
      Key: toKey(file),
      // Enable picture to be seen without download
      ContentType: mimetype(file),
      // Picture file (optimized)
      Body: await optimize(fileContents),
    }, (error) => {
      if (error) console.log('Error: ', error);
      else {
        console.log('Added: ', file);
        // Saves the sorted mapping with the new file
        mapping = _.sortBy(_.concat(mapping, file));
        // Update the mapping file
        updateMap(mapping);
        // Remove the file from addedFiles
        _.pull(addedFiles, file);
        // Add any other files if necessary
        if (addedFiles[0]) addFile(addedFiles[0]);
      }
    });
  });
};

// Remove a file
const deleteFile = (file) => {
  s3.deleteObject({ Key: toKey(file) }, (error) => {
    if (error) console.log('Error: ', error);
    else {
      console.log('Deleted: ', file);
      // Mutates the mapping with the deleted file
      // Update the mapping file
      updateMap(_.pull(mapping, file));
      // Remove the file from deletedFiles
      _.pull(deletedFiles, file);
      // Delete any other files if necessary
      if (deletedFiles[0]) deleteFile(deletedFiles[0]);
    }
  });
};

// Add files if necessary
if (addedFiles[0]) addFile(addedFiles[0]);

// Delete files if necessary
if (deletedFiles[0]) deleteFile(deletedFiles[0]);
