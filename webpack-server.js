var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack-config.js');

var port = 3000;
new WebpackDevServer(webpack(webpackConfig), {
    hot: true
}).listen(port, 'localhost', function(error) {

    if (error) {
        console.log(error);
    } else {
        console.log('Hot load server listening at localhost:' + port);
    }

});
