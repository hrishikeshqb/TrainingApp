var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
    vendor: ['angular', 'angular-ui-router', 'angular-bootstrap-calendar']
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/js',
    filename: 'app.bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
      // {
      //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/font-woff'
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/octet-stream'
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file'
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=image/svg+xml'
      // }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.ProvidePlugin({
      moment: "moment"
    })
  ]
};
