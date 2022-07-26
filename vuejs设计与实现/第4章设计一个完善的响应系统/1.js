// //  proxy实现响应式

// // 存储副作用函数的桶
// const bucket = new Set()

// // 原始数据
// const data = { text: 'hello world' }
// // 对原始数据的代理
// const obj = new Proxy(data, {
//     // 拦截读取操作
//     get(target, key) {
//         console.log('读取')
//         // 将副作用函数effect添加到存储副作用函数的桶中
//         bucket.add(effect)
//         // 返回属性值
//         return target[key]
//     },
//     // 拦截设置操作
//     set(target, key, newVal) {
//         console.log('设置')
//         // 设置属性值
//         target[key] = newVal
//         // 把副作用函数从桶里取出并执行
//         bucket.forEach(fn => fn())
//         // 返回true代表设置操作成功
//         return true
//     }

// })

// // 副作用函数
// function effect() {
//     console.log('obj.text', obj.text)
// }

// // 执行副作用函数，触发读取
// effect()

// // 1s后修改响应式数据

// setTimeout(() => {
//     obj.text = 'hello vue3'
// }, 1000)


// 改善版--- 副作用函数可以是任意函数  但是没有在副作用函数与被操作的目标字段之间建立明确的联系
// const data = { text: 'hello world' }
// const bucket = new Set()
// // 用一个全局变量存储被注册的副作用函数
// let activeEffect
// // effect 函数用于注册副作用函数
// function effect(fn) {
//     // 当调用effect注册副作用函数时 将副作用函数fn 赋值给activeEffect
//     activeEffect = fn
//     // 执行副作用函数
//     fn()
// }
// // 对原始数据的代理
// const obj = new Proxy(data, {
//     // 拦截读取操作
//     get(target, key) {
//         console.log('读取')
//         // 将副作用函数activeEffect存储的副作用函手机到桶中
//         if (activeEffect) {
//             bucket.add(activeEffect)
//         }
//         // 返回属性值
//         return target[key]
//     },
//     // 拦截设置操作
//     set(target, key, newVal) {
//         console.log('设置')
//         // 设置属性值
//         target[key] = newVal
//         // 把副作用函数从桶里取出并执行
//         bucket.forEach(fn => fn())
//         // 返回true代表设置操作成功
//         return true
//     }

// })
// effect(() => {
//     console.log('副作用函数obj.text', obj.text)
// })

// setTimeout(() => {
//     obj.notExist = 'hello vue3'
// }, 1000)

// 高级版
// const bucket = new WeakMap() // WeakMap 是弱引用 不影响垃圾回收机制
// const data = {
//     text: 'hello'
// }
// let activeEffect
// const obj = new Proxy(data, {
//     get(target, key) {
//         console.log('读取', key)
//         if (!activeEffect) return
//         let depsMap = bucket.get(target)
//         if (!depsMap) bucket.set(target, (depsMap = new Map()))
//         let deps = depsMap.get(key)
//         if (!deps) {
//             depsMap.set(key, (deps = new Set()))
//         }
//         deps.add(activeEffect)
//         console.log('deps', deps)
//         return target[key]
//     },
//     set(target, key, newVal) {
//         target[key] = newVal
//         const depsMap = bucket.get(target)
//         if (!depsMap) return
//         const effects = depsMap.get(key)
//         effects && effects.forEach(fn => fn())
//     }
// })
// console.log(obj.text)

// 终版 封装
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        track(target, key)
        return target[key]
    },
    // 拦截设置操作
    set(target, key, newVal) {
        target[key] = newVal
        trigger(target, key)
    }
})

function track(target, key) {
    if (!activeEffect) return
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Map()))
    }
    deps.add(activeEffect)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
}