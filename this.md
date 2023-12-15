

- this 永远指向最后调用它的那个对象
- 匿名函数的this永远指向window
- 实用call 或者 apply 的函数是会直接执行的
- bind 是创建一个新的函数需要手动调用才会执行
- 如果call apply bind 接收到的第一个参数是空或者null undefined 的话则会忽略这个参数
- forEach map filter 函数的第二个参数也是能显式绑定this的
- 箭头函数的this 指向函数定义时的this 而非函数执行时的this 通过作用域链条执行查找this
- 箭头函数的this无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改
- 字面量创建的对象 作用域是window 如果里面有箭头函数 this指向的是window
