const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = () => ({
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: "scripts_bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
          test: /\.(png|gif|jpe?g|svg)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.png",
    }),
  ],
});

const devConfig = () => ({
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
});

const prodConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles_bundle_[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});

module.exports = (env, argv) => {
  const modeConfig = argv.mode == "production" ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
