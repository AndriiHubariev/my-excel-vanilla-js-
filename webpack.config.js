const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlagin = require("copy-webpack-plugin");
const HTMLWebpackPlagin = require("html-webpack-plugin");
const MinCssWebpackPlagin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = (ext) => (isDev ? `bondle.${ext}` : `bondle.[hash].${ext}`);
const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  ];
  if(isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
};

console.log("isProd", isProd);
console.log("isDev", isDev);

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.js"],
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  devtool: isDev ? "source-map" : false,
  devServer: {
    port: 3000,
    hot: isDev,
  },
  plugins: [
    new CopyPlagin([
      {
        from: path.resolve(__dirname, "src/favicon.ico"),
        to: path.resolve(__dirname, "dist"),
      },
    ]),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlagin({
      template: "index.html",
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new MinCssWebpackPlagin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MinCssWebpackPlagin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
};
