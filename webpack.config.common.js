const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const commonConfig = {
    /*入口*/
    entry: {
        app: [
            path.join(__dirname, "src/index.js")
        ],
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].[hash].js",
        chunkFilename: "[name].[chunkhash].js"
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

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader?cacheDirectory=true"],
                //plugins: ["react-hot-loader/babel"],//增加
                include: path.join(__dirname, "src")
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};
module.exports = commonConfig;