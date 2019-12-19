module.exports = {
  plugins: {
    'postcss-easy-import': true,
    'postcss-mixins': true,
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'case-insensitive-attributes': true,
        'hexadecimal-alpha-notation': true,
        'place-properties': true,
        'custom-selectors': true,
        'double-position-gradients': true,
        'color-hex-alpha': true,
        'logical-properties': true,
      },
    },
    'postcss-font-magician': false,
    autoprefixer: true,
    'postcss-clean': {
      inline: ['all'],
    },
  },
};
