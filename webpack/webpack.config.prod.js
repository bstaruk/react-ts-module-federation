const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  output: {
    filename: '[name]-[fullhash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
