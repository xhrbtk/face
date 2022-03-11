
class Promise2 {
    let status 
}











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
    function reject(reson) {
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

function all(list) {
    return new Promise((resolve, reject) => {
        let resValues = []
        let count = 0
        let len = list.length
        if(len == 0) return resolve(resValues)
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
                if(count == len){
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

// promise.all promise.race promise.finaly

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
