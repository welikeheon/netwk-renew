// webpack.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: ['./js/index'], // file extension after index is optional for .js files
    output: {
        path: path.join(__dirname, 'public/javascripts'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    module: {
        rules: [{
                test: /\.(css|sass|scss)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.(png|jp(e*)g)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'images/[hash]-[name].[ext]'
                }
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                },
            }, {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    }
}



// const path = require('path');
// const webpack = require('webpack')

// module.exports = {
//     mode: 'development', // production 설정 파일에서는 'production'
//     entry: './js/index.js',
//     output: {
//         filename: './public/javascripts/bundle.js',
//         path: path.resolve(__dirname)
//     },
//     module: {
//         rules: [{
//                 test: /\.(scss|css)$/,
//                 use: [{
//                         // Adds CSS to the DOM by injecting a `<style>` tag
//                         loader: 'style-loader'
//                     },
//                     {
//                         // Interprets `@import` and `url()` like `import/require()` and will resolve them
//                         loader: 'css-loader'
//                     },
//                     {
//                         // Loader for webpack to process CSS with PostCSS
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: function() {
//                                 return [
//                                     require('autoprefixer')
//                                 ];
//                             }
//                         }
//                     },
//                     {
//                         // Loads a SASS/SCSS file and compiles it to CSS
//                         loader: 'sass-loader'
//                     }
//                 ]
//             }, {
//                 test: /\.js$/,
//                 loader: 'babel',
//                 exclude: /node_modules/,
//                 query: {
//                     cacheDirectory: true,
//                     presets: ['es2015', 'react']
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
//             }
//         ],
//     },
// };