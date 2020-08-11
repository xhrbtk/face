// 移动端性能优化

// webpack 原理

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
