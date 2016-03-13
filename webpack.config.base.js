var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src',
  plugins: [
    new webpack.ProvidePlugin({riot: 'riot'})
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
  },
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.tag'
    ]
  }
};
