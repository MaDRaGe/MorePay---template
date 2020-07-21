const path = require("path");
const miniCssPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/js/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          miniCssPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [miniCssPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new miniCssPlugin({ filename: "style.css" }),
  ],
};
