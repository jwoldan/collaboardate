const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/collaboardate.jsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties'],
          presets: ['@babel/react', '@babel/preset-env'],
        },
      },
    ],
  },
  devtool: 'source-maps',
};
