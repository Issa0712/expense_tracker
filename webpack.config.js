console.log(__dirname)

const path = require('path')

console.log(path.join(__dirname, 'public'))

module.exports = {
    entry: './src/app1.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};

//loader needed to run babel each time it see's a specific filetype like a .js file
//babel cli runs babel through command line interface
//babel-core allows you to run babel through webpack 
//webpack plugin teaches webpack how to run babel when it sees certain files