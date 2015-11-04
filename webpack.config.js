var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: ['./entry.js', './App/App.js' ],
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass']
        // loader: ExtractTextPlugin.extract('css!autoprefixer!sass')
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
  // plugins: [
  //   new ExtractTextPlugin('public/style.css', {
  //       allChunks: true
  //   })
  // ]
};
