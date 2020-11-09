import merge from "webpack-merge";
import common from "./webpack.common";

export default merge(common, {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src"],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: "./dist",
    overlay: true,
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
});
