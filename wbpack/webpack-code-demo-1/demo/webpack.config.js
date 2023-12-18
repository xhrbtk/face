const FileListPlugin = require('./plugins/FileListPlugin')
const loader = require('./loaders/loader')
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // ...其他配置项...  
    plugins: [
        new FileListPlugin({ outputFilePath: './output.md' })
    ],
    module: {
        rules: [
            { test: /\.js$/, use: loader },
        ],
    }


};


