# webpack.config
## install
```shell
npm install webpack webpack-dev-server -g
npm install webpack webpack-dev-server css-loader style-loader less-loader --save
```
## Hot module reload
### 
--hot 用于开启或者关闭HMR，如果启动webpack-dev-server --hot，webpack.config.js中就不需要引入plugins: HotModuleReplacementPlugin，两者不可同时存在。
--inline 如果dev-server在 webpack/hot/dev-server(node_module/webpack/hot/dev-server.js)中启动，则无需使用--inline命令。
### note
1. use the webpack-dev-server with --hot
2. do use the entry point webpack/hot/only-dev-server (with or w/o only) in the config
3. DO NOT add new webpack.HotModuleReplacementPlugin() to the config's plugin section
    new webpack.HotModuleReplacementPlugin() will cause the error: Uncaught RangeError: Maximum call stack size exceeded

