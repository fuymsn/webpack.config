# webpack配置
### imports-loader
用于不支持CommonJS规范的模块。安装：
```shell
npm install imports-loader --save
```
配置，名字含有jquery的对象暴露到全局：
```js
loaders: [
  { test: require.resolve('jquery'), loader: 'imports?this=>window'}
]
```
