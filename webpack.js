// 移动端性能优化

// webpack 原理

// webpack 构建流程
// 1 初始化参数 从配置文件和shell语句中读取与合并参数
// 2.开始编译 用上一步得到的参数初始化compiler对象 加载所有配置插件 执行对象的run方法开始编译
// 3.确定入口 根据配置中的entry找出所有的入口文件
// 4.编译模块 从入口文件触发 调用所有配置的loader对模块进行翻译 再找出该模块以来的模块 递归本步骤直到所有的入口依赖的文件经过了本步骤的处理
// 5.完成模块编译 在经过第4步使用loader翻译完所有模块后 得到了每个模块被翻译后的最终的内容以及他们之间的依赖关系
// 6 输出资源 根据入口和模块之间的依赖关系 组装成一个个包含多个模块的chunk 再吧每个chunk转换成一个单独的文件加入输出列表 这步是可以修改输出内容的最后机会
// 7 输出完成 在确定好输出内容之后 根据配置确定输出的路径和文件名 把文件内容写入到文件系统

// webpack 的compiler 和 compilation
// 在开发plugin时最常用的两个对象就是compiler 和compilation 他们是plugin和webpack之间的桥梁
// compiler和compilation的含义如下
// compiler 对象包含了webpack环境所有的配置信息 包含options loaders plugins 这些信息 这个对象在webpack启动时候被实例化 它是全局唯一的
// 可以简单地把它理解为webpack 实例

// compilation对象包含了当前的模块资源 变异生成资源 变化的文件等 当webapck以开发模式运行时 每当检测到一个文件变化 一次新的compilation将被创建
// compilation对象也提供了很多时间回调供插件做扩展 通过compilation也能读取到compiler对象
// compiler 和 compilation 的区别在于 compiler代表了整个webpack从过年启动到关闭的生命周期 而comilation只是代表了一次新的编译

// 缓存

// 跨域
// cors xhr发送请求时 浏览器发现该请求不符合同源策略 会给该请求加一个请求头 origin 后台进行一系列处理
//  如果确定接受请求则在返回加入一个响应头 access-control-allow-origin 浏览器判断该响应头中是否包含origin的值
// 如果有则浏览器会处理相应 如果不包含浏览器直接驳回
// access-control-allow-origin: *


// Cookie V.S. LocalStorage
// 主要区别是 Cookie 会被发送到服务器，而 LocalStorage 不会
// Cookie 一般最大 4k，LocalStorage 可以用 5Mb 甚至 10Mb（各浏览器不同）
// LocalStorage V.S. SessionStorage
// LocalStorage 一般不会自动过期（除非用户手动清除），而 SessionStorage 在回话结束时过期（如关闭浏览器）
// Cookie V.S. Session
// Cookie 存在浏览器的文件里，Session 存在服务器的文件里
// Session 是基于 Cookie 实现的，具体做法就是把 SessionID 存在 Cookie 里