// 防抖
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

// 节流
function throttle(fn, delay) {
    let canUse = true
    return function () {
        if (canUse) {
            fn.apply(this, arguments)
            canUse = false
            setTimeout(() => {
                canUse = true
            }, delay)
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
            if (
                typeof obj[key] === 'string' ||
                typeof obj[key] === 'number' ||
                typeof obj[key] === 'null' ||
                typeof obj[key] === 'undefined' ||
                typeof obj[key] === 'boolean' ||
                typeof obj[key] === 'symbol'
            ) {
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
// 攻击者盗用了你的身份，以你的名义发送恶意请求。CSRF能够做的事情包括：以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账......造成的问题包括：个人隐私泄露以及财产安全。
// 跨站请求伪造 利用后台有规律的接口 攻击者在被攻击的网站页面潜入代码
// 客户端防范 对于数据库的修改请求 全部使用post 禁止使用get请求 服务器端防范：在表单里面添加一段隐藏的唯一的token

// 基本数据类型  undefined null boolean string number symbol

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
// 1. 创建一个新对象
// 2. 设置新对象的constructor 属性为构造函数的名称 设置新对象的__proto__属性指向构造函数的prototype对象
// 3. 使用新对象调用函数 函数中this被指向新实例对象
// 4. 将初始化完毕的新对象地址 保存到等号左边的变量中

// vue-router 的 hash 和 history 模式 底部实现原理是什么
// hash 原生事件 是 hashchange
// history模式 原生事件是 popstate
// history.pushState() 相比雨直接修改hash 存在以下优势
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

var _new = function () {
    let Constructor = [].shift.call(arguments)
    let args = arguments
    const obj = new Object()
    obj.__proto__ = Constructor.prototype
    Constructor.call(obj, ...args)
    return obj
}

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

// Object.create()  方法创建新一个新的对象 使用现有的对象来提供创建对象的__proto__
function _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const ret = fn.apply(obj, arg)
    return ret instanceof Object ? ret : obj
}

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
// 标记清除 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记 然后它会去掉环境中的变量已经被 环境变量标记为引用变量在此之后 再被标记的变量 将被是为准备删除的变量
// 引用记数 每次引用加1 被释放时减一 当这个值的引用次数变成0 时 就可以将其内存空间回收 缺点 循环引用(obj1 和 obj2 通过格子属性相互引用 这两个对象的引用次数都是2)
