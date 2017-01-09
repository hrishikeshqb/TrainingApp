var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var outputConfigure =  {
  path: __dirname + '/js',
  filename: 'app.bundle.js',
  publicPath: '/TrainingApp/'
};

if (process.env.NODE_ENV == 'development') {
  outputConfigure.publicPath = '/';
}

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
    vendor: ['angular', 'angular-ui-router']
  },
  output: outputConfigure,
  module:{
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        exclude: /node_modules/
      }
    ],
  },
  devServer: {
    inline: true,
    hot:true,
    historyApiFallback:true,
    progress:true,
    contentBase:'../js'
 },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new HtmlWebpackPlugin({
      template: '../app.html',
      inject: 'head'
    })
  ]
};
