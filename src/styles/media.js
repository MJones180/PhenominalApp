// =================================
// ~ File cannot use `import`
// Must be readable by Node server
// =================================

module.exports = {

  // =================================
  // Screen Size Constants
  // =================================
  size_s_min: '350px',
  size_s_max: '749px',
  size_m_min: '750px',
  size_m_max: '1199px',
  size_l_min: '1200px',
  size_l_max: '1800px',

  // =================================
  // Media Shorthand Functions
  // =================================
  max: size => `(max-width: ${size})`,
  min: size => `(min-width: ${size})`,

};
