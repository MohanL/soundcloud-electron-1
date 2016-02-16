var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, './client'),
    entry: {
        jsx: './index.js',
        html: './index.html',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, './static'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    devServer: {
        contentBase: './client',
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css?sourceMap!postcss')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css?sourceMap!postcss!sass')
            },
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, './client')
                ],
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&&name=[name].[ext]'
            },
            {
                test: /\.png$/,
                loader: 'url?limit=100000&mimetype=image/png'
            },
            {
                test: /\.svg$/,
                loader: 'url?limit=100000&mimetype=image/svg+xml'
            },
            {
                test: /\.gif$/,
                loader: 'url?limit=100000&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                loader: 'file'
            },
            {
                test: /\.swf$/,
                loader: 'file'
            }
        ]
    }
};
