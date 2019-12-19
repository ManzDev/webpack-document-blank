const config = require('./webpack.config.js');
const path = require('path');

module.exports = Object.assign(config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
  },
});
