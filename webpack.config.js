const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin   = require("vue-loader/lib/plugin");
const webpack           = require("webpack");
const path              = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		filename: "notivan.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	devServer: {
		publicPath: "/",
		contentBase: path.resolve(__dirname, "dist"),
		hot: true,
		inline: true,
		port: 8000
	},
	module: {
		rules: [
		{
			test: /\.vue$/,
			loader: "vue-loader",
			exclude: /node_modules/
		},
		{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			include: /src|node_modules/,
			use: ["vue-style-loader", "css-loader"]
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ["file-loader"]
		}]
	},
	plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
		template: "./src/site.html",
		filename: "index.html",
		title: "Ivan Melnikov"
	})]
}