const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Minicss = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devServer: {
    writeToDisk: false,
  },
  //  stats: "minimal",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [Minicss.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: ['file-loader', 'img-loader'],
      },
      {
        test: /\.(t|j)s$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.txt$/i,
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Html({ template: 'src/index.html' }),
    new Minicss({
      filename: '[name].[contenthash].css',
    }),
    new Analyzer({
      analyzerMode: 'static',
      reportFilename: '../report.html',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
};
