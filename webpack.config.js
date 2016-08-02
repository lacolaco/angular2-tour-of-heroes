const webpack = require('webpack');

module.exports = {
    entry: {
        tsc: './tmp_tsc/bootstrap-dynamic.js',
        static: './tmp_static/bootstrap-static.js'
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js'
    },
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     mangle: {
        //         screw_ie8: true
        //     },
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true
        //     },
        //     comments: false
        // })
    ]
};