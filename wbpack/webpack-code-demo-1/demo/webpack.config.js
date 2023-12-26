const FileListPlugin = require('./plugins/FileListPlugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: ['./src/index.js'],
    // ...其他配置项...  
    plugins: [
        new FileListPlugin({ outputFilePath: './output.md' }),
        // new CopyWebpackPlugin({}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: path.join(__dirname, "./src/loader.js") }
                ]
            }
        ],
    },


};


