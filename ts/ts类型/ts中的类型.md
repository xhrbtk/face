
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

