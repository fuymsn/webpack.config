//require
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

//config
var config = require("./webpack.server.config.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(config);
//server
var server = new WebpackDevServer(compiler, {
	hot: true,
	stats: { colors: true },
	publicPath: config.output.publicPath
});
//listen
server.listen(8080);