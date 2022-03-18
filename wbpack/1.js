

// webpack知识体系 

//  1 配置相关
//  - loasder： 常用的有哪些， 有什么作用  如何开发loader  
// ** webpack 默认支持处理 js 和 json 文件 其他类型处理不了 需要借助loader 对不同类型的文件进行处理
// ** style-loader核心逻辑 通过动态添加style标签的方式 将样式引入页面
// ** postcss-loader 自动添加css3 部分属性的浏览器前缀
// ** mini-css-extract-plugin   分离样式文件 通过css文件的形式引入到页面上

// webpack 处理图片常用loader 
// ** file-loader解决图片引入问题 并将图片copy到指定目录 默认为dist
// ** url-loader 解决依赖file-loader 当图片小于limit 值的时候 会将图片转为base64 编码 大于limit值的时候依然是使用file-loader进行拷贝
// ** img-loader 压缩图片   webpack5 内置了资源处理模块 file-loader 和 url-loader 都可以不用安装

// ** webpack5 新增资源模块 assset 允许使用资源文件 字体 图标 等 而无需配置额外的loader
// ** asset/resource 将资源分割为单独的文件 并导出url 类似之前的file-loader的功能
// ** asset/inline 将资源导出为dataurl像是 类似之前的url-loader的小于limit参数时的功能
// ** asset/source 将资源导出为源码 类似raw-loader的功能
// ** asset 会根据文件大小来选择使用哪种类型 当文件小于8kb的时候 会使用asset/inline 否则会使用asset/resource

//  - plugin： 常用的有哪些 有什么作用 如何开发plugin
// ** 与loader用于转换特定类型的文件不同 plugin可以贯穿webpack打包的生命周期 执行不同的任务
// ** 打包后的资源文件 js或者css 可以自动引入到html中就需要使用html-webpack-plugin 来帮助你完成这个操作
// ** 打包前清空目录 使用插件 clean-webpack-plugin

// 为什么要配置contentBase 因为webpack打包的时候 对静态文件的处理 例如图片 都是直接copy到dist目录下面 但是对于
// 本地开发来说 这个过程太费时 也没必要 所以在设置contentBase之后 就直接到对应的静态目录下面去读取文件 而不需要
// 对文件做任何移动 节省了时间和性能开销


// babel
// ** 将es6语法转化为es5
// ** babel-loader 使用babel 加载es2015 代码并将其转化为es5
//  ** babel/core babel 编译的核心包
//  ** babel/preset-env babel 编译的预设 可以理解为babel插件的超集


//  - webpack性能优化 

//  2.原理相关
//  - webpac和辛苦tapable hook的使用
// - webpack调试与构建流程
// - webpack 热更新（hmr）原理
// - tree-shakeing 原理
// - babel  原理 开发babel插件

//  其他. rollup webpack5 vite

