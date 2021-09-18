const path = require('path');
// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  
  output: {
    publicPath: '/',
  },
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '/dist'),
    open: true,
    compress: true,
    port: 7070,
  },
  plugins: [
  ],
});