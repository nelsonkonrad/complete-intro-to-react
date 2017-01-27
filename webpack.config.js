const path = require('path')

module.exports = {
    context: __dirname,             // whenever we run webpack, go back to root dir
    entry: './js/ClientApp.js',
    devtool: 'eval',                 // debugging tool (source maps) use source-map to put whole source maps, eval is faster dirty way of doing it
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    devServer: {                     // webpack-dev-server includes watch
        publicPath: '/public/',       // when someones asks for css, is located in public (static directory)
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {                        // stuff webpack to report on
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',    // way to do preloaders in webpack 2
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {   
                include: path.resolve(__dirname, 'js'),
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ]
    }
}