// 支持隐式类型转换的语言称之为若类型语言 不支持隐式类转换的语言称为强类型语言
// 使用之前就需要确认其变量数据类型的称为静态语言

// js数据类型
// boolean null undefined number bigint string symbol object

// 对象是存放在堆空间的 在栈空间中只是保留了对象的引用地址 当js需要访问该数据的时候 是通过栈中的引用地址来访问的

// 在线程执行过程中 能接收并执行新的任务 就需要采用事件循环机制

// ------defer和async-----
// 对于defer，我们可以认为是将外链的js放在了页面底部。js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，所以如果前后有依赖关系的js可以放心使用。

// 对于async，这个是html5中新增的属性，它的作用是能够异步的加载和执行脚本，不因为加载脚本而阻塞页面的加载。一旦加载到就会立刻执行在有async的情况下，
// js一旦下载好了就会执行，所以很有可能不是按照原本的顺序来执行的。如果js前后有依赖性，用async，就很有可能出错。

// new
// 原型链
//eventloop
// map如何存取的
// vue 组件渲染
