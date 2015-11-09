var path = require('path');

module.exports = {
  entry: ['./CLIENT/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx$/, loader: 'jsx-loader' },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      { test: /\.json$/, loader: "json" }

    ]
  },
  plugins:[]
};
