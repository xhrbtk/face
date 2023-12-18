class FileListPlugin {
    constructor(options) {
        // 插件配置项  
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            // 获取打包后的文件清单  
            const fileList = compilation.getAssets().map(asset => asset.name);

            // 将文件清单写入Markdown文件  
            let md = `## 文件清单\n\n| 文件名 | 大小 |\n| --- | --- | \n`;
            fileList.forEach(file => {
                md += `| ${file} | - |\n`;
            });

            // 将Markdown内容写入文件  
            const fs = require('fs');
            fs.writeFileSync(this.options.outputFilePath, md);

            callback();
        });
    }
}

module.exports = FileListPlugin;