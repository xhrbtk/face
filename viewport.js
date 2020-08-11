// <meta name="viewport" content="width=device-width",initial-scale=1.0,maximum-scale=1.0;minimum-scale=1.0,user-scalable=no">
// viewport 并非只是ios上的独有属性 在安卓和winphone上同样也有viewport 他们要解决的问题是相同的
// 即无视设备的真实分辨率 直接通过dpi 在物理尺寸和浏览器之间重设分辨率 这个分辨率和设备的分辨率无关
// 设备真实width * dpi = 浏览器width

// 域名发散 pc时代为了突破浏览器的域名并发限制 遵循这样一条定律 http静态资源采用多个子域名
// 目的是为了充分利用现代浏览器的多线程并发下载能力
// 由于浏览器限制 每个浏览器 允许对每个域名的连接数一般是有上限的
// 浏览器做并发限制 原因 1以前服务器的负载能力差 稍微流量大点 服务器就容易崩溃 所以为了不让服务器崩溃 浏览器要对最大并发做限制
// 如果每个用户的最大并发数不限制的话 服务器的负载能力会大幅下降

// 域名收敛 经静态资源放在一个域名下面 而非发散情况下的多个域名下 域名发散可以突破浏览器的域名并发限制

// vue的生命周期钩子
// css的属性继承： 可以继承的 font-family font-weight font-size font-style color text-indent text-align
// 不可继承的 display width height padding margin background
// a标签的字体颜色不能被继承 h1 - h6 标签字体的大小也不能被继承 因为他们都有默认值

// position的方法: sticky 粘性定位元素 元素根据正常文档流进行定位 然后相对它最近的滚动祖先和containing block, 基于top right bottom
// 和 left 的值仅从偏移 偏移不会影响其他元素
// 是 position：relative 和 position：fixed 的结合体 当元素在屏幕内，表现为relative 就要滚出显示屏幕的时候 表现为fixed
// https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/
// sticky 元素效果完全受制于父级元素们 父级元素不能有任何 overflow：visible 以外的设置 否则没有粘滞效果 因为改变了滚动容器(及时没有滚动条)

// $nextTick 在下次dom更新循环结束之后 执行延迟回调 在修改数据之后立即使用这个方法 获取更新后的dom
// $once 监听一个自定义事件 但只触发一次 一旦触发之后 监听器就会被移除
// $off 移除自定义的事件监听器
// v-text
// v-html
// v-show
// v-if
// v-else
// v-else-if
// v-for
// v-on
// v-bind
// v-model
// v-slot
// v-pre   // 跳过这个元素和它的子元素的编译过程 可以用来展示原始的mustache标签 跳过大量没有指令的节点会加速编译
// v-cloak // 这个指令保持在元素上直到关联实例编译结束
// v-once

// vue生命周期
// 1.beforeCrete: 此时,$el和data都为undefined,没有初始化
// 2.created: 创建后data初始化了,而$el没有
// 3.brforeMount: 挂在之前,$el和data都初始化了
// 4.mounted: Vue实例挂载完成了
// 注意: beforeMount红色矩形框里是{{message}},mounted的红矩形框里是xuxiao is boy,说明挂载前$el的值为'虚拟'的元素节点,挂载后'虚拟'的Dom节点被真实的Dom节点替换

// vuex 的响应式 使用了重新new vue处理
// 父子传值
// 二叉树遍历
// flex属性
// ast
// webpack   babel/parser 将从webpack入口文件读取的内容转换为ast @babel/travers是一个对ast进行遍历的工具lei si  @babel/core的transformFromAst将ast 从es6转换为es5
// 对于某些不能做转换的使用 @babel/polyfill进行处理
//  虽然做了语法翻译，但只是一部分。在低版本浏览器还是没有比如Promise、数组的map等。所以不仅要使用@babel/preset-env进行ES6转ES5，还要借助 @babel/polyfill把缺失的变量或者函数补充到低版本的浏览器里。
