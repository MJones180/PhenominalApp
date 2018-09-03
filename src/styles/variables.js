// =================================
// ~ File cannot use `import`
// Must be readable by Node server
// =================================

const media = require('./media.js');

// Screen Size Constants
const { size_s_min } = media;
const { size_s_max } = media;
const { size_m_min } = media;
const { size_m_max } = media;
const { size_l_min } = media;
const { size_l_max } = media;

// Media Shorthand Functions
const min = size => media.min(size);
const max = size => media.max(size);

module.exports = {

  // =================================
  // Colors
  // =================================

  azure: '#5DA1CD',
  coral: '#DB5461',
  eggshell: '#FAF9F8',
  sand: '#E39767',
  stone: '#7C8B94',
  darkAzure: '#437595',
  darkSand: '#CD885D',
  darkStone: '#394044',

  // =================================
  // Shades
  // =================================

  blacken50: 'hsla(0, 0%, 0%, .5)',
  lighten10: 'hsla(0, 0%, 100%, .1)',
  lighten20: 'hsla(0, 0%, 100%, .2)',

  // =================================
  // Box Shadow
  // =================================

  shadow: '0px 0px 5px 1px',
  shadowLarge: '0px 0px 10px 2px',

  // =================================
  // Border Radius
  // =================================

  radius: '3px',
  radiusLarge: '5px',

  // =================================
  // Screen Sizes
  // =================================

  // Minimum values
  size_s_min,
  size_m_min,
  size_l_min,

  // Maximum values
  size_s_max,
  size_m_max,
  size_l_max,

  // =================================
  // Media Shorthand
  // =================================

  // Matches screen sizes within range
  s_only: `${min(size_s_min)} and ${max(size_s_max)}`,
  m_only: `${min(size_m_min)} and ${max(size_m_max)}`,
  l_only: `${min(size_l_min)} and ${max(size_l_max)}`,

  // Matches screen sizes > or =
  s_min: min(size_s_min),
  m_min: min(size_m_min),
  l_min: min(size_l_min),

  // Matches screen sizes < or =
  s_max: max(size_s_max),
  m_max: max(size_m_max),
  l_max: max(size_l_max),

};
