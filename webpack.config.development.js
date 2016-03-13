module.exports = {
  devServer: {
    hot: true,
    progress: true,
    stats: 'errors-only'
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/build/'
  }
};
