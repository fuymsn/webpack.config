var webpack = require("webpack");

module.exports = {

	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/js/entry.js'
	],

	output: {
		publicPath: 'http://localhost:8080/dist/js/',
		path: './dist/js/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{ test: /\.less$/, loader: "style!css!less"}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	//webpackdev server config
	devServer: {
		hot: true
	}
}