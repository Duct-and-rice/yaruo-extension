var path = require('path');
var webpack = require('webpack');
var path = require('path'),
    current = process.cwd();
var coffee = require("coffee-loader");

module.exports = {
	entry: './script.js',
	output: {filename: 'bundle.js'},
	devtool: 'source-map',
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin()
	],

	loaders: [
		// es6で記述されたjsファイルを読み込んだ場合にes6-loaderを使用する。
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			},
		},
		{test: /\.coffee$/, loader: "coffee-loader"}
	],

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}

};
