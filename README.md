# webpack.config

## Hot module reload

### note
1. use the webpack-dev-server with --hot
2. do use the entry point webpack/hot/only-dev-server (with or w/o only) in the config
3. DO NOT add new webpack.HotModuleReplacementPlugin() to the config's plugin section
    new webpack.HotModuleReplacementPlugin() will cause the error: Uncaught RangeError: Maximum call stack size exceeded

