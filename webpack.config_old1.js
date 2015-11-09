var webpack    = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';
var plugins = [
    new ExtractPlugin('bundle.css'), // <=== where should content be piped
    new webpack.optimize.CommonsChunkPlugin({
        name:      'main', // Move dependencies to our main file
        children:  true, // Look for common dependencies in all children,
        minChunks: 2, // How many times a dependency must come up before being extracted
    }),
];
module.exports = {
    devtool: 'eval',
    //manifest that hold files to compile
    entry: ['./CLIENT/main.jsx'],

    //where to compile to
    output: {
      path: './public',
      filename: 'bundle.js'
    },

    devtool: 'eval',
    module: {
        // preLoaders: [
        //     {
        //         test: /\.jsx?$/,
        //         exclude: /(node_modules|bower_components)/,
        //         loader: 'source-map'
        //     }
        // ],
        loaders: [


            {
                test: /\.scss$/,
                //loaded bottom to top
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/, //don't look here
                loaders: [
                    'react-hot',
                    'babel?stage=0'
                ]
            }
        ]
    },
    plugins: plugins
  };


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}


//original lines deleted from tutorial:
// entry: getEntrySources(['./src/js/entry.js']),
