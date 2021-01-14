const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dir = path.resolve(__dirname, ".");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "[name].[chunkhash:8].js",
    path: dir + "/dist",
  },
  module: {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: dir + "/index.html",
    }),
  ],
};
