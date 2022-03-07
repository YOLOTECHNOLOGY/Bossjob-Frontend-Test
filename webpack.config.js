const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/public/index.html',
	favicon: './public/favicon.ico',
	filename: 'index.html',
	manifest: './public/manifest.json',
});

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					'style-loader',
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.(png|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'build')
		},
		allowedHosts: 'all'
	},
	plugins: [HTMLWebpackPluginConfig],
};
