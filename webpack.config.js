const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/app.js"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|jpg|gif)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 5500,
  },
  watch: true
}