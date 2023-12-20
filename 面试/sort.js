// 归并排序

// 归并排序 复杂度 O(nlogn)   分治法 将原始数组切分成较小的数组 直到每个小数组只有一个位置 接着将小数组归并成较大的数组 直到最后只有一个排序完毕的大数组
let arr = [2, 1, 3, 7, 56, 89, 43, 21]
function mergeSort(arr) {
    let len = arr.length
    if (len == 1) return arr
    let mid = len >>> 1
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(arr1, arr2) {
    let result = []
    let il = 0
    let ir = 0
    while (il < arr1.length && ir < arr2.length) {
        if (arr1[il] < arr2[ir]) {
            result.push(arr1[il])
            il++
        } else {
            result.push(arr2[ir])
            ir++
        }
    }
    while (il < arr1.length) {
        result.push(arr1[il])
        il++
    }
    while (ir < arr2.length) {
        result.push(arr2[ir])
        ir++
    }
    return result
}


console.log(mergeSort(arr))



// 冒泡
let arr = [1, 2, 3, 5, 1, 2, 3]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
let result = bubbleSort(arr)
console.log('result', result)

// 二分查找
arr = [1, 2, 3, 4, 54]
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target < mid) {
            right = mid
        } else if (target > mid) {
            left = mid + 1
        } else if (target == mid) {
            return mid - 1
        }
    }
    return false
}

let target = binarySearch(arr, 100)
console.log(target)

// 科利华
function add(a, b, c) {
    return a + b + c
}
function multi(a, b, c, d) {
    return a * b * c * d
}
function curry(fn) {
    let arr = []
    let ceshi = function () {
        if (arguments.length === fn.length) {
            return fn.apply(null, arguments)
        } else {
            // [].slice.call(arguments) 将arguments转换为数组 因为arguments是类数组不是数组
            arr = arr.concat([].slice.call(arguments))
            if (arr.length == fn.length) {
                let result = fn.apply(null, arr)
                arr = []
                return result
            }
        }
        return ceshi
    }
    return ceshi
}

// 选择排序 升序
function selectSort(arr) {
    let len = arr.length
    let minIndex = 0
    let temp
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

// 快排
function quickSort(arr) {
    if (arr.length <= 1) return arr
    let len = arr.length
    let pivotIndex = Math.floor(len / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

// 发布订阅模式

class EventCenter {
    constructor() {
        this.map = {}
    }
    on(name, fn) {
        this.map[name] = this.map[name] || []
        this.map[name].push(fn)
    }
    emit(name, data) {
        let fnList = this.map[name] || []
        fnList.forEach(fn => fn.call(undefined, data))
    }
    off(name, fn) {
        let fnList = this.map[name] || []
        let index = fnList.indexOf(fn)
        if (index < 0) return
        fnList.splice(index, 1)
    }
}
let e = new EventCenter()
e.on('click', name => console.log('hi ' + name))
e.on('click', name => console.log('hello ' + name))

setTimeout(() => {
    e.emit('click', 'frank')
}, 3000);



// js中使用new关键字的时候  会经历以下几个步骤
1. 创建一个空对象
2. 设置原型链：新创建的对象的__proto__会被设置为构造函数的prototype对象
3. 执行构造函数: 构造函数中的代码会被执行 其中this关键字将引用新创建的对象
4. 返回新对象：除非构造函数显式的返回一个对象 否则创建的对象将被返回
// new 的实现
function objectfactory() {
    let obj = {}
    Constructor = [].shift.call(arguments) // 将第一个参数给Constructor
    // 将obj的__proto__属性指向constructor.prototype
    obj.__proto__ = Constructor.prototype
    // 利用apply更改this的指向 指向新的对象
    let ret = Constructor.apply(obj, arguments)
    // 如果构造函数返回的是数据 就实例化一个对象 如果是一个对象就返回该对象
    // 判断ret是否是object 如果是对象 返回ret 否则直接返回obj
    return typeof ret === 'object' ? ret : obj
}
function add(a, b) {
    console.log(a + b)
}
let x1 = new add(1, 2)
let x = newObject(add, 1, 2)



// call
Function.prototype.call2 = function (context) {
    let context = context || window
    context.fn = this
    let args = []
    let len = arguments.length
    for (let i = 1; i < len; i++) {
        args.push('arguments[' + i + ']')
    }
    let result = eval('context.fn(' + args + ')')
    delete context.fn
    return result
}

Function.prototype.apply2 = function (context, arr) {
    var context = Object(context) || window
    context.fn = this

    var result
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result
}

function newInstance(left, right) {
    let leftVal = left.__proto__
    let rightVal = right.prototype
    while (true) {
        if (leftVal == null) return false
        if (leftVal == rightVal) return true
        leftVal = leftVal.__proto__
    }
}


// 防抖 触发事件n秒后才执行函数 如果 n秒内又触发了事件 会重新计算函数执行时间

function debounce(fn, delay) {
    let timerId = null
    return function () {
        if (timerId) clearTimeout(timerId)
        let context = this
        timerId = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay)
    }
}

console.log('sort------')



// 节流 连续触发事件但是ns中只执行一次函数
function throttle(fn, delay) {
    let timer = null
    return function () {
        if (timer) {
            return
        } else {
            fn.apply(this, arguments)
            timer = setTimeout(() => {
                timer = null
            }, delay);
        }
    }
}



// 手写ajax
let xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
// true 表示异步请求 false 表示同步请求
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // readyState 0 未初始化 尚未调用open方法
        // 1 启动 一句调用open方法 但是未调用 send方法
        // 2 发送 已经调用 sned方法 但 尚未接收到响应
        // 3 接收 已经接收到部分响应数据
        // 4 完成 已经接收到全部响应数据 而且已经可以在客户端使用了
        // responseText 作为响应主体被返回
        // status 响应的http状态
        console.log(xhr.responseText)
    }
}
xhr.send()




// 用正则实现trim
function trim(string) {
    return string.replace(/^\s+|\s+$/g, '')
}

// 继承 es5
function Animal(leg) {
    this.leg = leg
}
function Dog(name, leg) {
    Animal.call(this, leg)
    this.name = name
}
Dog.prototype.say = function () {
    console.log(`${this.leg} ${this.name}`)
}
// Dog.prototype.__proto__ = Animal.prototype
function f() { }
f.prototype = Animal.prototype
Dog.prototype = new f()

// 继承es6
class Animal {
    constructor(leg) {
        this.leg = leg
    }
}
class Dog extends Animal {
    constructor(name, leg) {
        super()
        this.name = name
    }
    say() {
        console.log(`${this.leg} ${this.name}`)
    }
}
// 1.节省监听器  2.实现动态监听
// 事件委托  这个方法 主要是为了解决 li 里面span元素的代理 详情看 事件代理.html
function delegate(element, eventType, selector, fn) {
    // element ul selector li
    element.addEventListener(eventType, e => {
        let el = e.target
        while (!el.matches(selector)) {
            if (el == element) {
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el, e, el)
    })
    return element
}

// 浅拷贝
function shallowClone(source) {
    let target = {}
    for (let i in source) {
        // 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）
        if (source.hasOwnProperty(i)) {
            target[i] = source[i]
        }
    }
}

// 深拷贝
// JSON.parse(JSON.stringify(obj)) 不支持函数 正则 有环 date等
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

let a = {
    name: 'xhr',
    arr: [1, 2, 3],
    b: function () { console.log('x') },
    c: new Date(),
    e: (b) => b,
    regex: /\.(j|t)/
}
let cache = new Map()
function deepClone(a) {
    if (a instanceof Object) {
        if (cache.get(a)) return cache.get(a)
        let result
        if (a instanceof Function) {
            if (a.prototype) {
                // 有prototype的就是普通函数
                result = function () { return a.apply(this, arguments) }
            } else {
                // 箭头函数没有prototype 箭头函数没有this
                result = (...args) => a.call(undefined, ...args)
            }
        } else if (a instanceof Array) {
            result = []
        } else if (a instanceof Date) {
            // 在JavaScript中，如果new Date()的参数是一个数字，那么这个数字会被解释为毫秒数，而不是日期对象。因此，如果你想将一个数字转换为日期对象，你需要将它转换为0毫秒。
            // 举个例子，如果你有一个Unix时间戳（即从1970年1月1日00:00:00 UTC到现在的毫秒数），
            // 你可以使用new Date(unixTimestamp - 0)来将它转换为日期对象。这样做的目的是为了确保new Date()能够正确地解析参数
            result = new Date(a - 0)
        } else if (a instanceof RegExp) {
            result = new RegExp(a.source, a.flags)
        } else {
            result = {}
        }
        cache.set(a, result)
        for (let key in a) {
            // 只有a 的自由属性才拷贝 继承属性不拷贝
            if (a.hasOwnProperty(key)) {
                result[key] = deepClone(a[key])
            }
        }
        return result
    } else {
        return a
    }

}


function diPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        // 参数判断
        if (!Array.isArray(promises)) {
            throw new TypeError('promises must be an array')
        }
        let result = [] // 存放结果
        let count = 0 // 记录有几个resolved
        promises.forEach((promise, index) => {
            promise.then(
                res => {
                    result[index] = res
                    count++
                    count === promises.length && resolve(result) // 判断是否已经完成
                },
                err => {
                    reject(err)
                }
            )
        })
    })
}

let p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3)

diPromiseAll([p1, p2, p3]).then(
    res => {
        console.log(res, 'res')
    },
    err => {
        console.log(err, 'err')
    }
)

// [1, 2, 3]

let p1 = Promise.reject(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3)
diPromiseAll([p1, p2, p3]).then(
    res => {
        console.log(res, 'res')
    },
    err => {
        console.log(err, 'err')
    }
)


// 查找两个dom节点的最近公共父节点
function findCommonParent(n1, n2) {
    if (n1.contains(n2)) {
        return n1
    } else if (n2.contains(n1)) {
        return n2
    } else {
        return findCommonParent(n1.parentNode, n2)
    }
}

function findCommonParent(n1, n2) {
    while (!n1.contains(n2)) {
        n1 = n1.parentNode
    }
    return n1
}

// cookie 和 localstorage  
// localstorage 不同于cookie 会自动过期 过期时间需要自己维护 在setItem时 将过期时间种下
// getItem 时将种下的时间当前时间进行对比 如果大于当前时间 将值返回即可 否则通过 removeItem将值移除 并返回null
// 设计一个可以设置有效期的localStrorage Api


// 使用reduce 实现map 函数功能
// 输入[1,2,3]
// 输出[2,4,6]
Array.prototype.map2 = function (cb, ctx = null) {
    if (typeof cb !== 'function') {
        throw ('cb must be a function')
    }
    return this.reduce((result, cur, index, array) => {
        return result.concat(callback.call(ctx, cur, index, array))
    }, [])
}



// 防抖 连续触发函数只执行一次
function debounce(fn, delay) {
    let timerid = null
    return function () {
        if (timerid) clearTimeout(timerid)
        let context = this
        timerid = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay)
    }
}

// 节流 连续触发事件 ns只执行一次
function throttle(fn, delay) {
    let canuse = true
    return function () {
        if (canuse) {
            fn.apply(this, arguments)
            canuse = false
            setTimeout(() => {
                canuse = true
            }, delay)
        }
    }
}




// 函数科利华
function add(a, b, c) {
    return a + b + c
}
function multi(a, b, c, d) {
    return a * b * c * d
}
function curry(fn) {
    let arr = []
    let ceshi = function () {
        if (arguments.length == fn.length) {
            return fn.apply(null, arguments)
        } else {
            arr = arr.concat([...arguments])
            if (arr.length == fn.length) {
                let result = fn.apply(null, arr)
                arr = []
                return result
            }
        }
    }
    return ceshi
}

// ts 提供了类型约束 因此更可控 更容易重构 更适合大型项目 更容易维护

// xss攻击
// 恶意用户可以提交内容 提交的内容可以显示在另一个用户的页面上 这些内容未经过滤 直接运行在另一个用户的页面上
// csrf
// 攻击者盗用了你的身份，以你的名义发送恶意请求。CSRF能够做的事情包括：以你名义发送邮件，发消息，盗取你的账号，
// 甚至于购买商品，虚拟货币转账......造成的问题包括：个人隐私泄露以及财产安全。
// 跨站请求伪造 利用后台有规律的接口 攻击者在被攻击的网站页面潜入代码
// 客户端防范 对于数据库的修改请求 全部使用post 禁止使用get请求 服务器端防范：在表单里面添加一段隐藏的唯一的token



// 基本数据类型  undefined null boolean string number symbol bigInt 

// 数据类型检测方法 四种方式的区别 1、typeof 2. instanceof 用于检测引用类型 可以检测到是什么类型的实例 3.Object.prototype.toString.call(obj)
// typeof 判断null的时候 和 instanceof 判断null的时候会出错
// 因此在用 typeof 来判断变量类型的时候，我们需要注意，最好是用 typeof 来判断基本数据类型（包括symbol），避免对 null 的判断

// typeof null 为啥是object  因为这是js的bug js在底层存储变量的时候 会在变量的机器码的低位1-3位存储其类型信息 对于undefined 和null来说 这两个信息
//是有点特殊的 null 所有机器码均为0 undefined 用-2^30 整数来表示 typeof 判断null的时候就 出问题了

// instanceof的原理及重写
// instanceof 实现的主要原理就是只要右边变量的prototype在左边变量的原型链上即可
//因此 instanceof 在查找的过程中会遍历左边变量的原型链 直到找到右边变量的prototype
// 如果查找失败 则会返回false 告诉我们左边变量并非是右边变量的实例
// 箭头函数没有原型

function instance(left, right) {
    let leftval = left.__proto__
    let rightval = right.prototype
    while (true) {
        if (leftval == null) return false
        if (leftval == rightval) return true
        leftval = leftval.__proto__
    }
}

// Symbol和bigint的特殊性
// BigInt 是一种内置对象 它提供了一种方法表示大于2^53 -1的整数 BigInt可以表示任意大的整数
// 某些方面类似于Number 但是也有不同点：不能用于Math对象中的方法 不能和任何Number实例混合运算
// 两者必须转换同一种类型 BigInt变量在转换成为Numbe变量时可能会丢失精读

// 项目中你都会使用哪些办法为啥
//如果让你封装一个toType检测类型你会怎么写
// 检测是数组或者类数组以及纯粹的对象你会怎么做  检测类数组使用Object.prototype.toString.call() ===> [object Arguments]

// es5实现继承 继承的优缺点
// es6 set的使用
// new 一个对象的过程 (es6 es5 原型链)
// 1 创建一个临时对象
// 2. 指定原型
// 3. 绑定this
// 4. 执行构造函数
// 5. 返回这个临时对象

// vue-router 的 hash 和 history 模式 底部实现原理是什么
// hash 原生事件 是 hashchange
// history模式 原生事件是 popstate

// 当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。

// 需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法）

// history.pushState() 相比于直接修改hash 存在以下优势：
//pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；
//而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
//pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；
//而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；
//而 hash 只可添加短字符串；pushState() 可额外设置 title 属性供后续使用。

//hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.abc.com，因此对于后端来说，
//即使没有做到对路由的全覆盖，也不会返回 404 错误。history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id。
//如果后端缺少对 /book/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，
//你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

// vue 单页面应用 和 多页面应用 优缺点： 只有一张Web页面的应用，是一种从Web服务器加载的富客户端，
//单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次，常用于PC端官网、购物等网站
// 多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等



// var _new = function () {
//     let Constructor = [].shift.call(arguments)  //删除并拿到类数组第一项
//     let args = arguments
//     const obj = new Object()
//     obj.__proto__ = Constructor.prototype
//     Constructor.call(obj, ...args)
//     return obj
// }

// Object.create()  方法创建新一个新的对象 使用现有的对象来提供创建对象的__proto__
function _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const ret = fn.apply(obj, arg)
    return ret instanceof Object ? ret : obj
}

const newObj = new Proxy(obj, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`)
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, value, receiver) {
        console.log(target, key, value, receiver)
        if (key === 'text') {
            input.value = value
            p.innerHTML = value
        }
        return Reflect.set(target, key, value, receiver)
    },
})


// webpack
//接收一份配置
// 分析出入口模块位置
//读取入口模块的内容 分析内容
// 哪些是依赖
//哪些是源码  es6 jsx 需要编译 --》》 浏览器能够执行
// 分析其他模块
// 拿到数据结构 模块路径 处理好的内容
// 创建bundle.js 启动器函数 来补充代码里有可能出现的module export require 让浏览器能够顺利的执行

// loader 自己编写一个
// loader就是一个函数 声明函数 不能用箭头函数 拿到源代码 作进一步的修饰处理 再返回处理后的源码就可以了
// this.async:如果loader⾥里里⾯面有异步的事情要怎么处理理呢
//定义⼀一个异步处理理，告诉webpack,这个loader⾥里里有异步事件,在⾥里里⾯面调⽤用下这个异步 //callback 就是 this.callback 注意参数的使⽤用
// 顺序 是 自下而上 自左到右

//  Plugin



// Proxy 跟 Object.defineProperty 的对比

// 优点：

// 不需要递归遍历每个属性，添加劫持，深层对象属性只有在访问的时候才转换成 Proxy
// 对新增的属性不需要另外做劫持处理
// 不需要对数组的方法进行重定义
// Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
// Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。
// Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

// 缺点： 不兼容 ie

// const Foo = {
//     template: `...`,
//     beforeRouteEnter(to, from, next) {
//         // 在渲染该组件的对应路由被 confirm 前调用
//         // 不！能！获取组件实例 `this`
//         // 因为当守卫执行前，组件实例还没被创建
// next(vm => {
//     // 通过 `vm` 访问组件实例
//   })
//     },
//     beforeRouteUpdate(to, from, next) {
//         // 在当前路由改变，但是该组件被复用时调用
//         // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//         // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//         // 可以访问组件实例 `this`
//     },
//     beforeRouteLeave(to, from, next) {
//         // 导航离开该组件的对应路由时调用
//         // 可以访问组件实例 `this`
//     },
// }

// 垃圾回收
// 标记清除 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记 然后它会去掉环境中的变量已经被 
// 环境变量标记为引用变量在此之后 再被标记的变量 将被是为准备删除的变量

// 引用记数 每次引用加1 被释放时减一 当这个值的引用次数变成0 时
//  就可以将其内存空间回收 缺点 循环引用(obj1 和 obj2 通过格子属性相互引用 这两个对象的引用次数都是2)




// 后端一次给你10万条数据 如何优雅的展示 
// 1 使用setTimeout 分页渲染
// 2 使用requestAnimationFrame 代替 setTimeout 减少重排次数
// 3 使用文档碎片 + requestAnimationFrame  document.createDocumentFragment 创建一个新的空白的文档片段 因为文档片段存在于内存中 并不在dom 树中
// 4 懒加载  列表尾部放一个空节点blank 等滚动到blank 再增加第二页
// 5 虚拟列表 
// window.requestAnimationFrame 告诉浏览器 你希望执行一个动画 并且要去浏览器在下次重绘之前调用
// 指定的回调函数更新动画 该方法需要传入一个回调函数作为参数 该回调函数会在浏览器下一次重绘之前执行

// 虚拟列表 对列表的可视区域进行渲染 对非可见区域不渲染或部分渲染 从而极大提高性能的一种技术 主要是为了减少dom渲染节点
//  有时我们会遇到一些业务场景 要展示的列表很长 且不能使用分页的方式 如果一次性把数据全部渲染到页面
// 浏览器将变得非常卡顿 因为渲染dom需要耗费大量时间 虚拟列表就是对长列表的一种优化方式 通过只渲染可视区域数据大大提高性能
// 具体实现实例 在vuetets里面



// 重载函数是一种特殊请情况 允许再同一范围内声明几个功能类似的同名函数
// 但是这些同名函数的形势参数必须不同 也就是说用同一个函数完成不同的功能
// 重载函数常用来实现功能类似而所处理的数据类型不同的问题

// jsbridge 的实现原理
// meta-view-port

// package.json 文件里面主要内容是什么
// 1.devdependencies  只用于开发环境 不用于生产环境
// 2.dependencies 需要发布到生产环境

// 弹框为什么使用动态组件

//如果简单粗暴的每个弹窗都写一个dialog 那么会有以下问题 模版过长 且大量冗余 命名困难 每一个弹窗都要一个变量去控制显示

// npm package.json 的结构 及作用
// vue原理
// 写组件的收获
// 版本管理








// splice(start, deleteCount, item1, item2, itemN)

// some方法 

// 实现flat方法
let arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11]]]]
// arr.toString().split(',').map(item =>parseFloat(item))
function flat(arr) {
    let newArr = []
    let x = function (arr) {
        for (let i in arr) {
            if (Array.isArray(arr[i])) {
                x(arr[i])
            } else {
                newArr.push(arr[i])
            }
        }
    }
    x(arr)
    console.log(newArr)
}
flat(arr1)

// 数组转树
// let array = [
//     { id: 1, parentId: null, name: 'Node 1' },
//     { id: 2, parentId: 1, name: 'Node 1.1' },
//     { id: 3, parentId: 1, name: 'Node 1.2' },
//     { id: 4, parentId: 2, name: 'Node 1.1.1' },
//     { id: 5, parentId: 2, name: 'Node 1.1.2' },
//     { id: 6, parentId: null, name: 'Node 2' }
// ];

function arrayToTree(array) {
    const map = new Map(); // 用于存储每个节点的引用
    // 遍历数组，将每个元素映射到map中
    array.forEach(item => {
        map.set(item.id, { ...item, children: [] });
    });
    // // 遍历数组，将每个元素添加到其父节点的children数组中
    array.forEach(item => {
        if (item.parentId !== null) {
            map.get(item.parentId).children.push(map.get(item.id));
        }
    });
    // // 找到根节点
    const roots = [];
    array.forEach(item => {
        if (item.parentId === null) {
            roots.push(map.get(item.id));
        }
    });

    return roots;
}

