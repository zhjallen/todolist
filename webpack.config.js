const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const prodConfig = {
    /*入口*/
    mode: "production",
    devtool: "cheap-module-source-map",
    entry: {
        app: [
            path.join(__dirname, "src/index.js")
        ],
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        }
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false
    },

    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new webpack.NamedModulesPlugin(), //添加，官方推荐的帮助分析依赖的插件
        new webpack.HotModuleReplacementPlugin(),//设置这里
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src/index.html")
        })
    ],
};
module.exports = merge(commonConfig, prodConfig);