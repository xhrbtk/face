

## const 本质
```
实际上保证的并不是变量值不得改动 而是变量指向的那个内存地址不得改动,对于简单数据类型而言，值就是
 保存在变量指向的内存地址中 因此等同于常量 但对于复合类型的数据而言 变量指向的内存地址保存的只是一个指针 const 
只能保证这个指针式固定的 至于它指向的数据结构是不是可变的 这完全不能控制
```
## es6声明变量的6种方法 var function const let import class

## 顶层对象属性 
```
在es5中 全局变量 == 顶层对象
在es6中 全局变量 ！= 顶层对象

```

## global对象
- 在浏览器中 顶层对象是window
- 在浏览器和web worker 中 self 也指向顶层对象
- 在node 中 顶层对象是global

## 获取顶层对象方法

```
(typeof window !== 'undefined' ? window 
: (typeof process == 'object' && typeof require == 'function' && typeof global == 'object')
? global : this )
```


