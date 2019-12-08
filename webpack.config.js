const path = require('path');
const {IgnorePlugin} = require('webpack')

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js', // bundle = asambla
      path: path.resolve(__dirname, 'dist'),
    },
    // module:{
    // noParse: /http|https/,
    // },
    plugins: [
        new IgnorePlugin(/http|https/)
    ]

  };