module.exports = {

  mode: 'development',

  entry: './main.js',
  output: {
    filename: 'example.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'px2rem-loader',
      }]
    }]
  },
  resolveLoader: {
    modules :['./loaders/', 'node_modules'],
  }
}
