const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  entry: './src/app.js',
  devServer: {
    contentBase: path.join(__dirname, 'src/pages/'),
    watchContentBase: true,
    hot: true,
    index: 'bundling.html',
    port: 2018,
    open: true,
    openPage: '',
    stats: {
      modules: false,
      performance: true,
      timings: true,
      warnings: true,
    },
    historyApiFallback: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
})
