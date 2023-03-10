const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  mode: 'production',
  devServer : {
    static: path.join(__dirname, 'dist'),
  },
  module: {
    rules : [
      {
        test: /\.css$/i,
        use : ['style-loader','css-loader']
      },
      {
        test: /\.tff$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(jpeg|png|ico)$/i,
        type: 'asset/resource'
      }
    ]
  }
};