module.exports = {
  devtool: "source-map",
  entry: ["./App/App.js", "./public/timeline.js", "./public/main.js"],
  output: {
    filename: "public/bundle.js"
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
      }
    ]
  }
};
