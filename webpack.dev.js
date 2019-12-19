const config = require('./webpack.config.js');
const path = require('path');

module.exports = Object.assign(config, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
});
