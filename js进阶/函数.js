
// 定义 匿名函数 具名函数 箭头函数
// 匿名函数
var fn = function () { } // fn 记录的是函数的地址 存在堆内存中 而不是函数本身
var fn2 = fn     // 把函数的地址赋值给fn2

console.log(fn.name) //fn
console.log(fn2.name) // fn 
// 是匿名函数 但是有名字


// 具名函数

function fn3() {
    // 作用域是全局的
    return 3
}
var fn5 = function fn4() {
    // fn4的作用域 只是括号内
}
console.log(fn4)
// 匿名函数和具名函数还有箭头函数都有name

// 词法作用域 抽象语法树
var global1 = 1
function fn1(param1) {
    var local1 = 'local1'
    var local2 = 'local2'
    function fn2(param2) {
        var local2 = 'inner local2'
        console.log(local1)
        console.log(local2)
    }
    function fn3() {
        var local2 = 'fn3 local2'
        fn2(local2)
    }
}

// call stack
function a() {
    console.log('a')
    return 'a'
}

function b() {
    console.log('b')
    return 'b'
}

function c() {
    console.log('c')
    return 'c'
}

a()
b()
c()


// this & arguments
// this是隐藏的第一个参数 且必须是对象

function f() {
    console.log(this)
    console.log(arguments)
}
f.call() // window
f.call({ name: 'frank' }) // { name: 'frank }, []
f.call({ name: 'frank' }, 1) // { name: 'frank' }, [1]
f.call({ name: 'frank' }, 1, 2) // { name: 'frank' }, [1,2]
// this 为什么必须是对象 因为this是函数与对象之间的羁绊

var person = {
    name: 'frank',
    sayHi: function (person) {
        console.log('hi i am ' + person.name)
    },
    sayBye: function (person) {
        console.log('bye i am' + person.name)
    },
    say: function (person, word) {
        console.log(word + 'i am' + person.name)
    }
}

// var person = {
//     name: 'frank',
//     sayHi: function () {
//         console.log('hi i am ' + this.name)
//     },
//     sayBye: function () {
//         console.log('bye i am' + this.name)
//     },
//     say: function ( word) {
//         console.log(word + 'i am' + this.name)
//     }
// }

person.sayHi(person)
person.sayBye(person)
person.say(person, 'how are you')

// 能不能变成
person.sayHi()
person.sayBye()
person.say('how are you')

// 如果你不想吃语法糖
person.sayHi.call(person)
person.sayBye.call(person)
person.say('how are you')

// 新手疑惑的两种写法
var fn = person.sayHi
person.sayHi()  //this === person
fn()  // this === window

// call / apply  当你不确定参数的个数的时候 就使用apply
// bind call和apply是直接调用函数 而bind 是返回一个新的函数(并没有调用原来的函数) 这个新函数会call和原来的函数 call的参数由你指定


//return
// 每个函数都有return 如果你不写return  相当于写了return undefined

// 科利华 / 高阶函数
// 返回函数的函数 科利华： 将f(x,y) 变成 f(x=1)(y) 或 f(y=1)x
// 高阶函数 在数学和计算机科学中 高阶函数是至少满足下列一个条件的函数 接受一个或多个函数作为输入 输出一个函数  不过它常常同时满足两个条件

function curry() {
    let arr = []
    let ceshi = function () {
        let xx = Array.from(arguments)
        if (arguments.length == 3) {
            return Array.from(arguments)
        } else {
            arr = arr.concat(xx)
            if (arr.length == 3) {
                return arr
            }
        }
        return ceshi
    }
    return ceshi
}

// let bb = curry()


function curry(func, thisArg) {
    if (!Array.isArray(thisArg)) {
        thisArg = [];
    }
    return function () {
        let args = Array.prototype.slice.call(arguments);
        if ((args.length + thisArg.length) < func.length) {
            return curry(func, thisArg.concat(args));
        }
        return func.apply(this, thisArg.concat(args));
    };
}


// 缺点  科利华 和 bind  call apply之类的实现

// 不理解 this为什么必须是个对象