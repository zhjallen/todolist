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
        proxy:{
            '/dev': {
                target: 'http://127.0.0.1:8080', // 接口的域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                  '^/dev': ''
                }
              }
        },
    },
   
};
module.exports = merge(commonConfig, devConfig);