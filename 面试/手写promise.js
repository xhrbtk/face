


function Promise(exe) {
    let self = this
    self.status = 'pending'
    self.vlaue = undefined
    self.reason = undefined
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
        }
    }
    function reject(reason) {
        if (self.status == 'pending') {
            self.status = 'rejected'
            self.reason = reason
        }
    }
    try {
        exe(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
Promise.prototype.then = function (onFufiled, onRejected) {
    let self = this
    if (self.status === 'resolved') {
        onFufiled(self.value)
    }
    if (self.status == 'rejected') {
        onRejected(self.reason)
    }
}

let promise = new Promise(function (resolve, reject) {
    console.log('xxx')
    resolve(100)
})

promise.then(
    function (data) {
        console.log('data:', data)
    },
    function (err) {
        console.log('err:', err)
    }
)

// 如果作为参数的promsie实例自身定义了catch方法 那么它被rejected时并不会触发promise.all（）的catch的方法
function all(list) {
    return new Promise((resolve, reject) => {
        let resValues = []
        let count = 0
        let len = list.length
        if (len == 0) return resolve(resValues)
        for (let [i, p] of list) {
            resolve(p).then(
                res => {
                    count++
                    resValues[i] = res
                    if (count === len) {
                        resolve(resValues)
                    }
                },
                err => {
                    reject(err)
                }
            )
        }
    })
}

// promise.all = (list) => {
//     return new Promise((resolve, reject) => {
//         let count = 0
//         let result = []
//         let len = list.length
//         if(len == 0) return res([])
//         Promise.forEach((item, i) => {
//             Promise.resolve(item).then(res => {
//                 count++
//                 result[i] = res
//                 if(count == len) resolve(result)
//             })
//         }).catch(reject)
//     })
// }
promise.all = (list) => {
    let len = list.length
    let count = 0
    let result = []
    return new Promise((resolve, reject) => {
        list.map((item, index) => {
            item.then(res => {
                result[index] = res
                count++
                if (count == len) {
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

// promise.all promise.race promise.allSettled promise.any promise.finaly
// promise.all 所有的都执行成功 才返回成功 有一个失败 就返回失败
// promise.race 一个成功就是成功 一个失败就是失败
// promise.allsettled 没有失败 返回执行的所有结果
// promise.any 一个成功就是成功 所有失败才是失败
// promise.finaly 不管前面成功或者失败 都会执行后面的
// 结构：
// display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
// visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击
// opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

// 继承：
// display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
// visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。

// 性能：
// displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大
// visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容
// opacity: 0 ： 修改元素会造成重绘，性能消耗较少

// 联系：它们都能让元素不可见

// 箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有以下几点差异：

// 1、函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

// 2、不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// 3、不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

// 4、不可以使用 new 命令，因为：

// 没有自己的 this，无法调用 call，apply。
// 没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto__






// 
function diPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        promises.map((promise, index) => {
            promise.then(res => {
                result[index] = res
                count++
                if (count == promises.length) resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    })
}
let p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3),
    p4 = Promise.reject('err4')
p5 = Promise.reject('err5')

diPromiseAll([p1, p2, p4]).then(res => {
    console.log(res)
}).catch(err => {
    console.log('err', err)
})

Promise.race([p4, p2, p1]).then(res => {
    console.log('res-race', res)
}).catch(err => {
    console.log('err-race', err)
})

function dirace(promises) {
    return new Promise((resolve, reject) => {
        promises.map((promise, index) => {
            promise.then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    })
}

dirace([p4]).then(res => {
    console.log('dirace', res)
}).catch(err => {
    console.log('diraceerr', err)
})

Promise.allSettled([p1, p2, p4]).then(res => {
    console.log('allsettled', res)
}).catch(err => {
    console.log('settlederr', err)
})

// map 返回一个新数组  forEach没有返回结果 
function allSettled(promises) {
    return new Promise((resolve) => {
        let result = []
        let count = 0
        promises.map((promise, index) => {
            promise.then(res => {
                count++
                result[index] = { status: 'fulfilled', value: res }
                if (count == promises.length) resolve(result)
            }).catch(err => {
                count++
                result[index] = { status: 'rejected', reason: err }
                if (count == promises.length) resolve(result)
            })
        })
    })
}

allSettled([p1, p2, p4]).then(res => {
    console.log('---settle', res)
})

Promise.any([p1, p5]).then(res => {
    console.log('any', res)
}).catch(err => {
    console.log('err-any', err)
})

function any(promises) {
    // 只要有一个resolve 那么久resolve 所有的reject 才变成reject
    return new Promise((resolve, reject) => {
        let count = 0
        promises.map((promise, index) => {
            promise.then(res => {
                resolve(res)
            }).catch(err => {
                count++
                if (count == promises.length) reject('所有的请求都是失败的')
            })
        })
    })
}

any([p5]).then(res => {
    console.log('any---', res)
}).catch(err => {
    console.log('err-any--', err)
})


// then方法可以接受两个回调函数作为参数 
// 第一个回调函数是Promise对象的状态变为Resolved时调用  
// 第二个回调函数是promise对象的状态变为rejected时调用 其中第二个函数是可选的 不一定提供

// Promise新建后就会立即执行
// promise的then方法 是定义在promsie的prototype上的

class myPromise {
    constructor(handle) {
        if (typeof handle !== 'function') {
            throw new Error('my promise must accept a function')
        }
        this._status = 'Pending'
        this._value = undefined

        try
    }
}