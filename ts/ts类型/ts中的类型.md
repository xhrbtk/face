
### datatype

- js的datatype  null undefined number string boolean bigint symbol object
- ts的datatype js的+ void never enum unknown any + 自定义类型 type interface

- 什么时候用enum

- type 和 interface  interface只描述对象 type则描述所有数据
- type 只是别名 interface 是类型声明
- type 不可以重新赋值

- 交叉类型
- typeof 类型收窄 但是 不支持 某些类型具体判断 比如 object 里面的数组 和 function
- instanceof 类型收窄 但是不支持 基本类型 
- typeof 和 instanceof 都不支持 ts独有类型
- 类型谓词 is  5.ts
- 用a.kind 区分a的类型 
- 断言


### 要求 T = A | B | C | D

- A B C D 有相同属性 kind 或 其他
- kind 的类型是简单类型
- 各类型中的kind 无交集
- 则 称 T 为 可辨别联合


- any = 所有类型的联合吗？ 除了 never / unknow /any /void  法外狂徒  ts的绝大部分规则对any 不生效


### 交叉类型 常用于有交集的类型A B
- id 冲突了 就不能用id了 never
- 如果A B 无交集 可能得到never 也可能只是属性为never


### 类型兼容与赋值 7.ts
- 属性多的可以代替属性少的
- 属性少的代替不了属性多的
- 函数之间的兼容 参数个数不同 能兼容吗？


### bottom 类型 可以 赋值 给top 类型



### 描述对象 
- type 或 interface
- 索引签名 和 映射类型
- 问号表示可选
- readonly 表示只读

### type 和 interface 的区别
- 不同点 type 可以定义基本类型的别名 如type myString = string
- 不同点 type 可以通过typeof操作符来定义 如 type myType = typeof someObj
- 不同点 type 可以申明联合类型 如 type unionType = myType | myType2
- 不同点 type 可以申明元组类型 如 type yuanzu = [myType1, mytype2]

- interface 可以申明合并
```
interface test {
    name: string
}
interface test {
    age: string
}
<!-- test 实际为{ name: string age: string } -->
```

### 函数的声明方式
- 构造函数
- 类型谓词


### 与参数
- 函数重载
- 剩余参数
- 展开参数 与 as const
- 参数对象析构


### 泛型 确实有点难以理解
- 高级
- 体操 - 智商挑战
- 泛型约束

