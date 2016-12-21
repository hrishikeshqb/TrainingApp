var webpack = require('webpack');
module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
    vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: __dirname + '/js',
    filename: 'app.bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
};
