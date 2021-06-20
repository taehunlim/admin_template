
const path = require('path');
const webpack = require('webpack');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const dotenv = require('dotenv');


module.exports = (env, options) => {

	const { DEV } = env;

	if (DEV) {
		dotenv.config({ path: "./env/dev.env" })
	} else {
		dotenv.config({ path: "./env/.env" })
	}

	// const copyMap = {
	// 	'axios': DEV ? './node_modules/axios/dist/axios.js' : './node_modules/axios/dist/axios.min.js'
	// }

	return {
		mode: DEV ? "development" : "production",

		devtool: DEV ? "inline-source-map" : "cheap-module-source-map",

		devServer: {
			contentBase: "./dist",
			historyApiFallback: true,
		},

		entry: {
			main: ['babel-polyfill', "./src/index.tsx"],

		},

		output: {
			filename: DEV ? "js/[name].[hash].bundle.js" : 'js/[name].[chunkhash].bundle.js',

			chunkFilename: 'js/[name].chunk.js', //dynamic import

			path: path.resolve(__dirname, './dist'),

			publicPath: "/",
		},

		module: {

			rules: [
				{
					test: /\.js$|jsx$|ts$|tsx$/,
					use: [
						'babel-loader',
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
							},
						},
					],
					exclude: /node_modules/
				},

				{
					test: /\.scss$/,
					use: [
						DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader",						
					
					],
					exclude: /node_modules/
				},

				{
					test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[name].[ext]',
								esModule:false
							}
						}
					]
				},
				{
					// write files under 10k to inline or copy files over 10k
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								fallback: 'file-loader',
								name: 'fonts/[name].[ext]'
							}
						}
					]
				},
			],
		},

		plugins: [

			//------------------------common
			new HtmlwebPackPlugin({
				template: './public/index.html',
				templateParameters: {
					env: DEV ? '(개발)' : '',
				},
				minify: DEV ? false : {
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					useShortDoctype: true
				  },

				showErrors: true
			}),

			new WebpackManifestPlugin({
				filename: 'manifest.json',
				basePath: "./dist"
			}),

			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'process.env.API_URL': JSON.stringify(process.env.API_URL),
			}),

			//-------------------------dev

			new webpack.ProgressPlugin(),

			//-------------------------prod

			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css'
			}),
			// new CopyPlugin({
			// 	patterns: [
			// 		{
			// 			from: copyMap['axios'],
			// 			to: "js/axios.min.js"
			// 		}
			// 	]
			// })

		],
	
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx", "scss"]
		},

		optimization: {

			splitChunks: {
				name: "vendors",
				chunks: 'all',
			}, // vendors
			runtimeChunk: {
				name: "runtime"
			}, // runtime

			minimizer: [
				new OptimizeCSSAssetsPlugin({}),

				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					sourceMap: true
				}),
			]
		},

		// externals: {
		// 	axios: "axios"
		// }
	}

}