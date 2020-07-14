const path = require("path");

module.exports = {
  entry: "./file_link_server/dashboard_ui/dashboard_react/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "file_link_server/static/dashboard_ui/js/"),
  },
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
};
