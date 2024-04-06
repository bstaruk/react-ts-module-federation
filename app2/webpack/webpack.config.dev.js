const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 3001,
    watchFiles: ['src/**/*'],
  },
});
