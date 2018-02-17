const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[hash].app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|ttf|woff|eot)$/i,
        loader: 'file-loader?name=/media/[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?removeTag=true',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/url',
          'file-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'bundling.html',
      template: './src/pages/bundling.html',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'artboard.html',
      template: './src/pages/artboard.html',
      hash: true,
    }),
  ],
  resolve: {
    modules: ['components', 'src/pages', 'src', 'node_modules'],
    extensions: ['.js', '.json', '.css', '*'],
  },
}
