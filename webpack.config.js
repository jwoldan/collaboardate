const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/collaboardate.jsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
          plugins: [
            'babel-plugin-lodash',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
          ],
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
    ],
  },
  devtool: 'source-maps',
};
