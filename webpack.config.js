module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    publicPath: "/dist",
    contentBase: "./src",
    open: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
