var path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'example', 'src', 'index.jsx') ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      include: [
        path.join(__dirname, 'example')
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
}