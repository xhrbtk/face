

## 运行 Ts代码

```
node -r ts-node/register let_to_var.ts


<!-- 如果要在浏览器里面查看 -->


node -r ts-node/register --inspect-brk let_to_var.ts
```



// babel 的原理
// 1 parse 把代码code 变成 ast
// traverse 遍历ast进行修改
// generate 把ast 变成 代码code2

// 为什么用ast  
// 你需要识别每个单词的意思 才能做到只修改用于声明变量
// ast可以明确的告诉你每个let的意思
// 你很难用正则表达式来替换，正则很容易把 let a = 'let' 变成 var a = 'var'

// 依赖收集 
// 1. 调用collectCodeAnddeps('index.js')
// 2. 先把depRelation[index.js]初始化为{deps:[], code: index.js的源码 }
// 3. 然后把index.js源码code 变成ast
// 4. 遍历ast 看看import 了哪些依赖  假设依赖了a.js 和 b.js
// 5 把a.js 和b.js 写到depRelation[index.js].deps里
// 6 最终得到的deprecation就收集了index.js的依赖 
// 启发 用哈希表来存储文件依赖 


// 多层依赖关系

// 1. collectCodeAndDeps 太长了 缩写为collect
// 1. 调用collect（index.js）
// 发现依赖 './a.js' 于是调用 collect（‘a.js’）
// 发现依赖 谢谢于是调用 xx
// 没有更多依赖了 a.js 这条线结束 发现下一个依赖 
// 以此类推 其实就是递归

// 循环依赖 index -> a -> b
// index -> b -> a   //重复依赖不一定是循环依赖
// 避免重复进入同一个文件
// 一旦发现这个key已经在keys里了 就return
// 我们只需要分析依赖不需要执行代码 所以遮掩格式可行的 
// 由于我们的分析不需要执行代码 所以叫静态分析
// 但如果我们执行代码 就会发现还是出现了循环

// 结论
// 模块间可以循环依赖
// 但不能有逻辑漏洞
// 写一个没有逻辑漏洞的循环依赖

// babel 可以把高级代码翻译为es5
// @babel/parser
// babel/traverse
// babel/generate
// babel/core 包含前三者
// bable/preset-env 内置了很多规则

// 代码技巧  使用哈希表来存储数据 通过检测key来避免重复
