## ast相关
- parse 把代码code 变成 ast
- traverse  遍历ast 进行修改
- generate  把ast变成代码code2

## 打包
- 把es6代码转译为es5版本
- 把所有代码合并到一个文件里

## 代码技巧
- 使用哈希表来存储数据
- 通过检测key 来避免重复


## loader 可以是一个普通函数  也可以是一个异步函数  loader的作用就是输入一种代码转换成为另一种代码输出出来
- style-loader不是转译
- sass-loader less-loader 这些loader是把代码从一种语言转译为另一种
- 因此这样将loader连接起来不会出问题
- 但是style-loader 是在插入代码 不是转译 所以需要寻找插入时机 和 插入位置
- 插入代码的时机应该是在获取到css-loader 的结果之后
- 插入代码的位置应该是在代码的下面

## webpack官方 style-loader 的思路

- style loader 在pitch 钩子里通过css-loader 来require文件内容
- 然后在文件内容后面添加injectstylesintostyleTag 代码
- 

- Compiler 是整个 Webpack 构建过程的协调者和管理者，而 Compilation 则代表了构建过程中的一个具体阶段，即资源和模块的转换过程
- module 打包之后的产物就是bundle  对于bundle拆分后的东西叫做chunk