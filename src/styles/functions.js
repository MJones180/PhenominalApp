// =================================
// ~ File cannot use `import`
// Must be readable by Node server
// =================================

const media = require('./media.js');

module.exports = {

  // =================================
  // Image fetch
  // =================================
  image: route => `url("https://picture-assets.s3.amazonaws.com/${route}")`,

  // =================================
  // Media Shorthand Functions
  // =================================
  max: size => media.max(size),
  min: size => media.min(size),

};
