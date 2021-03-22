

## webpack 要解决两个问题

-  浏览器不支持 直接运行带有import 和 export 关键字的代码 
- 现代浏览器可以通过<script type=module>来支持 import export
- ie 8 - 15 不支持 import export 所以不可能运行

## 兼容策略 

- 激进的兼容策略 把代码全放在<script type=module> 里
- 缺点 不被ie8-15支持 且会导致文件请求过多
- 把关键字转译为普通代码 并把所有文件打包成一个文件
- 缺点 需要写复杂的代码来完成这件事情 

## 为什么要跟commonjs 进行区分
-  void 0 等价于 undefined

## import关键字 会变成reruire 函数  export 关键字会变成exports对象
## 本质 esmodule语法变成了commonjs规则

## 把关键字转译为

## es6模块 和 commonjs 的区别
- es模块是es标准里的模块定义语法 commonjs 是nodejs社区的民间约定
- es模块使用import 和 export 关键字 commonjs 则是使用require和exports 对象
- es模块采用了动态只读引用 而commonjs 则是简单的浅复制 
- es是编译时加载 commonjs 是运行时加载