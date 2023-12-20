// 防抖  连续触发函数执行一次
function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        })
    }
}

// 节流 连续触发函数ns执行一次
function throttle(fn, delay) {
    let timer = null
    return function () {
        if (timer) return
        fn.apply(this, arguments)
        timer = setTimeout(() => {
            timer = null
        }, delay)
    }
}

// new 
//  1. 创建一个空对象
//  2. 空对象的__proto__属性指向构造函数的prototype
//  3. 将构造函数的this 指向构造函数 并执行函数
//  4. 如果执行的结果返回的是对象 则返回这个对象 否则返回新创建的对象
function objectFactory(args) {
    let obj = {}
    let Constructor = [].slice.call(arguments).shift()
    obj.__proto__ = Constructor.prototype
    let ret = Constructor.apply(obj, arguments)
    return typeof ret == 'object' ? ret : obj
}

// // 浅拷贝
let obj = { name: 'xhr', age: 18 }
function shallowCopy(obj) {
    let map = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            map[key] = obj[key]
        }
    }
    return map
}

// 深拷贝
let cache = new Map()
function deepCopy(a) {
    if (a instanceof object) {
        let result
        if (cache.get(a)) return cache.get(a)
        if (a instanceof Function) {
            if (a.prototype) {
                result = function () { return a.apply(this, arguments) }
            } else {
                result = () => a.apply(undefined, arguments)
            }
        } else if (a instanceof Date) {
            result = new Date(a - 0)
        } else if (a instanceof RegExp) {
            result = new RegExp(a.source, a.flags)
        } else if (a instanceof Array) {
            result = []
        } else {
            result = {}
        }
        cache.set(a, result)
        for (let key in a) {
            if (a.hasOwnProperty(key)) {
                result[key] = deepCopy(a[key])
            }
        }
        return result
    } else {
        return a
    }
}

// 函数科利华
function curry(fn) {
    let arr = []
    let ceshi = function () {
        if (arguments.length == fn.length) {
            return fn.apply(this, arguments)
        } else {
            arr = arr.concat([...arguments])
            if (arr.length == fn.length) {
                let result = fn.apply(this, arguments)
                arr = []
                return result
            }
        }
        return ceshi
    }
    return ceshi
}


// 实现instanceof
function newInstance(left, right) {
    let leftVal = left.__proto__
    let rightVal = right.prototype
    while (true) {
        if (leftVal == null) return false
        if (leftVal == rightVal) return true
        leftVal = leftVal.__proto__
    }
}

// 手写ajax
let xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.response)
    }
}
xhr.send()

// 发布订阅
class EventCenter {
    constructor() {
        this.map = {}
    }
    on(name, fn) {
        this.map[name] = this.map[name] || []
        this.map[name].push(fn)
    }
    emit(name, data) {
        let fnList = this.map[name]
        if (fnList.length == 0) return
        fnList.forEach(fn => fn.apply(undefined, data))
    }
    off(name, fn) {
        let fnList = this.map[name]
        if (fnList.length == 0) return
        let index = fnList.indexOf(fn)
        fnList.splice(index, 1)
    }
}

// 继承
function Animal(leg) {
    this.leg = leg
}
function Dog(name, leg) {
    Animal.call(this, leg)
    this.name = name
}
Dog.prototype.say = function () {
    console.log(`${this.name}, ${this.leg}`)
}

// Dog.prototype.__proto__ = Animal.prototype
var f = function () { }
f.prototype = Animal.prototype
Dog.prototype = new f()

// es6 继承
class Animal {
    constructor(leg) {
        this.leg = leg
    }
}
class Dog extends Animal {
    constructor(name, leg) {
        super(leg) //实现继承
    }
}