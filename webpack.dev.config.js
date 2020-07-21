const path = require("path");

module.exports = {
  entry: path.resolve(
    __dirname,
    "file_link_server/dashboard_ui/dashboard_react/src/index.tsx"
  ),
  watch: true,
  mode: "development",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
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
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "file_link_server/static/dashboard_ui/js/"),
  },
};
