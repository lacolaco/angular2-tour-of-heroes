module.exports = {
    entry: {
        tsc: './tmp_tsc/bootstrap-dynamic.js',
        dynamic: './tmp_dynamic/bootstrap-dynamic.js',
        static: './tmp_static/bootstrap-static.js'
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js'
    },
};