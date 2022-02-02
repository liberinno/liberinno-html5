const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game-bundle.js',
    clean : true
  },
  module : {
      rules : [
          {
              test : /\.css$/i,
              use : ['style-loader', 'css-loader']
          },
          {
              test : /\.(png|svg|jpg|jpeg|gif)$/i,
              type : 'asset/resource'
          }
      ]
  },
  plugins : [
      new HtmlWebpackPlugin({
          title : 'Output Manager',
      }),
    ]
};