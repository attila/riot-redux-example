var path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'tag'
      }
    ]
  }
};
