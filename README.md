# 1. todolist
react+react-router+redux+antd

## 1.1. 项目说明
本项目主要是搭建一个react开发框架，主要使用的技术有react react-router redux axios antd，已经涉及到react开发使用的基本技术
整个技术栈都是目前最新的
## 1.2. 项目目录
```

```
## webpack
目前webpack已经升级到4.0，和之前的变化还是蛮大的
- 安装  
yarn add webpack --dev
- webpack.config.js
```
const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
};
```
- 新建入口文件

mkdir src && touch ./src/index.js

src/index.js 添加内容

document.getElementById('app').innerHTML = "Webpack works"

