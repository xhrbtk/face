// 防抖
function debounce(fn, delay) {
    let timerId = null
    return function () {
        if (timerId) clearTimeout(timerId)
        let context = this
        timerId = setTimeout(() => {
            fn.apply(context, arguments)
        }, delay);
    }
}

// 节流
function throttle(fn, delay) {
    let canUse = true
    return function () {
        if (canUse) {
            fn.apply(this, arguments)
            canUse = false
            setTimeout(() => {
                canUse = true
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

// class
function Animal(color) {
    this.color = color
}
Animal.prototype.move = function () { }

function Dog(color, name) {
    Animal.call(this, color)
    this.name = name
}

// Dog.prototype.__proto__ = Animal.prototype
function temp() { }
temp.prototype = Animal.prototype
Dog.prototype = new temp()




// class 实现
class Animal {
    constructor(color) {
        this.color = color
    }
    move() { }
}

class Dog extends Animal {
    constructor(color, name) {
        super(color)
        this.name = name
    }
}

// 事件委托
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
        el && fn.apply(el, e, el)
    })
    return element
}


// 浅拷贝
function shallowClone(source) {
    let target = {}
    for (let i in source) {
        // hasOwnProperty 方法会返回一个布尔值 指示对象自身属性中师范具有指定的属性
        if (source.hasOwnProperty(i)) {
            target[i] = source[i]
        }
    }
}

// 深拷贝
function deepClone(obj) {
    let newobj = {}
    for (let key in obj) {
        // 判断obj是否有key这个自有属性
        if (obj.hasOwnProperty(key)) {
            // 基本类型
            if (typeof obj[key] === 'string' || typeof obj[key] === 'number' || typeof obj[key] === 'null' || typeof obj[key] === 'undefined' || typeof obj[key] === 'boolean') {
                newobj[key] = obj[key]
            } else {
                // 多层潜逃的引用类型
                newobj[key] = deepClone(obj[key])
            }
        }
    }
    return newobj
}


// ts 提供了类型约束 因此更可控 更容易重构 更适合大型项目 更容易维护

// xss攻击 
// 恶意用户可以提交内容 提交的内容可以显示在另一个用户的页面上 这些内容未经过滤 直接运行在另一个用户的页面上
// csrf 
// 跨站请求伪造 利用后台有规律的接口 攻击者在被攻击的网站页面潜入代码 
// 客户端防范 对于数据库的修改请求 全部使用post 禁止使用get请求 服务器端防范：在表单里面添加一段隐藏的唯一的token

// 基本数据类型  undefined null boolean string number

// 数据类型检测方法 四种方式的区别 1、typeof 2. instanceof 用于检测引用类型 可以检测到是什么类型的实例 3.Object.prototype.toString.call(obj)
// typeof 判断null的时候 和 instanceof 判断null的时候会出错
// 因此在用 typeof 来判断变量类型的时候，我们需要注意，最好是用 typeof 来判断基本数据类型（包括symbol），避免对 null 的判断

// typeof null 为啥是object  因为这是js的bug js在底层存储变量的时候 会在变量的机器码的低位1-3位存储其类型信息 对于undefined 和null来说 这两个信息
//是有点特殊的 null 所有机器码均为0 undefined 用-2^30 整数来表示 typeof 判断null的时候就 出问题了


// instanceof的原理及重写
// instanceof 实现的主要原理就是只要右边变量的prototype在左边变量的原型链上即可 
//因此 instanceof 在查找的过程中会遍历左边变量的原型链 直到找到右边变量的prototype 
// 如果查找失败 则会返回false 告诉我们左边变量并非是右边变量的实例

function newInstanceor(left, right) {
    let rightProto = right.prototype
    let leftVal = left.__proto__
    while (true) {
        if (leftVal == null) return false
        if (leftVal == rightProto) return true
        leftVal = leftVal.__proto__
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
// 1.创建一个新对象
// 2. 设置新对象的constructor 属性为构造函数的名称 设置新对象的__proto__属性指向构造函数的prototype对象
// 3. 使用新对象调用函数 函数中this被指向新实例对象
// 4. 将初始化完毕的新对象地址 保存到等号左边的变量中


// 好未来面试
// vue-router 的 hash 和 history 模式 底部实现原理是什么
// hash 原生事件 是 hashchange
// history模式 原生事件是 popstate

// vue 单页面应用 和 多页面应用 优缺点： 只有一张Web页面的应用，是一种从Web服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次，常用于PC端官网、购物等网站
// 多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等


// jsbridge 的实现原理
// meta-view-port


// 弹框为什么使用动态组件

//如果简单粗暴的每个弹窗都写一个dialog 那么会有以下问题 模版过长 且大量冗余 命名困难 每一个弹窗都要一个变量去控制显示 


// npm package.json 的结构 及作用
// vue原理
// 写组件的收获
// 版本管理



