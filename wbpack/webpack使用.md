## webpack从5开始默认不支持ie
## 30分钟入门正则表达式 https://luke0922.gitbooks.io/learnregularexpressionin30minutes/content/chapter1.html


## runtime 如果我为了让一个东西运行就叫做runtime
- 在optimization里设置 runtimeChunk: 'single'
- webpack 单独打包runtime 节省用户带宽
## node依赖单独打包
- 使用splitchunks
## 设置 moduleIds: 'deterministic' 保证用户不重复下载没有变化的内容