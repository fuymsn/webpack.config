var webpack = require("webpack");
module.exports = {
	entry: [
		'./src/js/entry.js'
	],

	output: {
		publicPath: 'http://localhost:8080/dist/js/',
		path: __dirname + '/dist/js/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{ test: /\.less$/, loader: "style!css!less"}
		]
	},
	plugins: []
}