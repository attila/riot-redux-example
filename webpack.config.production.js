var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    })
  ],
  devtool: 'source-map'
};
