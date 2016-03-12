var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname + '/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          type: 'babel'
        }
      }
    ],
    loaders: [
      {
        test: /\.js|\.tag$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
