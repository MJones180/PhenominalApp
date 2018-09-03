// =================================
// ~ File cannot use `import`
// Must be readable by Node server
// =================================

module.exports = {

  // =================================
  // Extend Background Color
  // =================================
  extendBackground: (mixin, color) => ({
    '&::before': {
      position: 'absolute',
      'z-index': '-1',
      top: '0',
      right: '0',
      bottom: '0',
      left: '-9999px',
      content: '""',
      'border-left': `9999px solid ${color}`,
      'box-shadow': `9999px 0 0 ${color}`,
    },
  }),

  // =================================
  // Background Image Shorthand
  // =================================
  parallaxBackdrop: (mixin, url) => ({
    width: '100%',
    height: 'auto',
    'background-image': `image(${url})`,
    'background-repeat': 'no-repeat',
    'background-attachment': 'fixed',
    'background-position': 'center center',
    'background-size': 'cover',
    '@media min($size_l_max)': {
      'background-size': '$size_l_max',
    },
  }),

};
