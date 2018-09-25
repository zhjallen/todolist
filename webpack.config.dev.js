const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    /*入口*/
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        openPage: "",
        port: 9000,
        open: true,
        inline: true,
        hot: true,
        historyApiFallback: true,

    },
};
module.exports = merge(commonConfig, devConfig);