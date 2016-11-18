const path = require('path');
const appSrc = path.join(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: appSrc,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
  ]
  }
};
