# webpack.config
## install
```shell
npm install webpack webpack-dev-server -g
npm install webpack webpack-dev-server css-loader style-loader less-loader --save
```
## Webpack dev server
webpack-dev-server是一个小型的node.js服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应。

简单来说，webpack-dev-server就是一个小型的静态文件服务器。
## Live Reload 自动刷新
webpack-dev-server分为两种自动刷新模式，通常使用inline模式。
##### ifrme
页面是嵌套在一个iframe下的，在代码发生改动的时候，这个iframe会重新加载
##### inline
一个小型的webpack-dev-server客户端会作为入口文件打包，这个客户端会在后端代码改变的时候刷新页面。

启动inline模式有两种方式：

**1. 命令行**
```shell
$ webpack-dev-server --inline
```
使用`--inline`选项会自动把webpack-dev-server客户端加到webpack的入口文件配置中。这时访问浏览器，你会看见控制台的log信息：
```shell
[HMR] Waiting for update signal from WDS...
[WDS] Hot Module Replacement enabled.
```
HMR前缀的信息由`webpack/hot/dev-server(node_modules/webpack/hot/dev-derver.js)`模块产生，WDS前缀的信息由webpack-dev-server客户端产生。

**2. webpack.config.js配置**

该方式需要手动把webpack-dev-server/client?http://localhost:8080加到配置文件的入口文件配置处。运用此方式运行webpack-dev-server命令就无需使用`--inline`

## HMR (Hot module reload 热替换)
在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉。有以下两种方式配置：
##### 命令行启动
```shell
$ webpack-dev-server --hot --inline --config webpack.cmd.config.js
```
* --hot 开启HMR，它把`webpack/hot/dev-server`入口点加入到了webpack配置文件中。
* --inline 开启自动刷新inline模式，它把`webpack-dev-server/client?http://localhost:8080`配置到了webpack config文件中entry的入口处。
* --config 指定读取webpack配置文件

##### webpack.config.js 配置
1. 把`webpack/hot/dev-server`加入到webpack配置文件的entry项；
2. 把`webpack-dev-server/client?http://localhost:8080`添加到webpack配置文件的entry项；
3. 设置output的publicPath为服务器`http://localhost:8000/dist/js/`；

最后执行如下命令即可：
```shell
$ webpack-dev-server --hot
```
该webpack.config.js配置如果不使用 --hot 并在webpack.config中添加`plugins: new webpack.HotModuleReplacementPlugin()`，则页面刷新可实现普通的livereload。

## 代码修改
要使HMR功能生效，还需要做一件事情，就是要在应用热替换的模块或者根模块里面加入允许热替换的代码。否则，热替换不会生效，还是会**重刷整个页面**。
```js
if(module.hot){
    module.hot.accept();
}
```
也可以使用一些插件去完成这个工作，例如webpack-module-hot-accept插件。不过，webpack-dev-server HMR结合react-hot-loader使用的时候，react-hot-loader会去做这个工作。

## Note
1. do use the entry point webpack/hot/only-dev-server (with or w/o only) in the config
2. DO NOT add new webpack.HotModuleReplacementPlugin() to the config's plugin section
    new webpack.HotModuleReplacementPlugin() will cause the error: Uncaught RangeError: Maximum call stack size exceeded
3. --hot 用于开启或者关闭HMR，如果启动webpack-dev-server --hot，webpack.config.js中就不需要引入plugins: HotModuleReplacementPlugin，两者不可同时存在。
4. --inline 如果dev-server在 webpack/hot/dev-server(node_module/webpack/hot/dev-server.js)中启动，则无需使用--inline命令。
