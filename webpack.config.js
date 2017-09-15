const path = require('path');

module.exports = {
  entry: './scripts/site.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
