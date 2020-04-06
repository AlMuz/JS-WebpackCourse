const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	entry: {
		main: './src/index.js'
	},
	mode: 'production',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(jpg|gif|png|)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new OptimizeCssAssetsPlugin(),
		new MiniCSSExtractPlugin({
			filename: "[name]-[contenthash].css"
		}),
		new HTMLWebpackPlugin({
			template: './src/index.ejs',
			inject: true,
			title: 'Webpack-course'
		})
	]
}
