import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default merge(common, {
  mode: "development",
  entry: ["./src"],
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: "./dist",
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
