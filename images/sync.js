const fs = require('fs');
const jsonfile = require('jsonfile');
const _ = require('lodash');
const cloudinary = require('cloudinary');

// Cloudinary info
cloudinary.config({
  cloud_name: 'phenominal',
  api_key: '984625116129754',
  api_secret: 'svjXcCkqqVUSvWwchBxAP9gDtok',
});

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

// Remove leading './' and extension
// Example: ./logos/icon.png > logos/icon
const public_id = file => _.slice(file, 2, -4).join('');

// Update the map file
const updateMap = data => jsonfile.writeFileSync(mapFile, data, { spaces: 2 });

// Upload a file
const addFile = (file) => {
  cloudinary.v2.uploader.upload(file, { public_id: public_id(file) }, (error) => {
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
};

// Remove a file
const deleteFile = (file) => {
  cloudinary.v2.uploader.destroy(public_id(file), { invalidate: true }, (error) => {
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
