// 冒泡
let arr = [1, 2, 3, 5, 1, 2, 3]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j + 1] = arr[j]
                arr[j] = temp
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
        let mid = parseInt((left + right) / 2)
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
            arr = arr.concat([].slice.call(arguments))
            if ((arr.length == fn.length)) {
                let result = fn.apply(null, arr)
                arr = []
                return result
            }
        }
        return ceshi
    }
    return ceshi
}

// 选择排序
function selectSort(arr) {
    let len = arr.length
    let minIndex = 0
    let temp
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] < arr[j]) {
                minIndex  j
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
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}


function quickSort(arr) {
    let len = arr.length
    let pivotIndex = Math.floor(len / 2)
    let pivot = arr[pivotIndex]
    let left = []
    let right = []
    for (let i = 0; i < len; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else if (arr[i] < pivot) {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}


// 发布订阅模式

var EventCenter = (function () {
    var events = {}
    function on(evt, handler) {
        events[evt] = events[evt] || []
        events[evt].push({
            handler: handler
        })
    }
    function fire(evt, args) {
        if (!events[evt]) {
            return
        }
        for (var i = 0; i < events[evt].length; i++) {
            events[evt][i].handler(args)
        }
    }
    function off(name) {
        delete events[name]
    }
    return {
        on: on,
        fire: fire,
        off: off   //取消订阅
    }
})()


// 发布订阅模式
let eventCenter = (function () {
    let events = {}
    function on(evt, handler) {
        events[evt] = events[evt] || []
        events[evt].push({ handler: handler })
    }
    function fire(evt, args) {
        if (events[evt]) return
        for (let i = 0; i < events[evt].length; i++) {
            events[evt].handler(args)
        }
    }
    function off(name) {
        delete events[nam]
    }
    return {
        on,
        fire,
        off
    }
})()

// new 的实现
function objectfactory() {
    let obj = {}
    Constructor = [].shift.call(arguments) // 将第一个参数给Constructor
    // 将obj的__proto__属性指向constructor.prototype
    obj.__proto__ = Constructor.prototype
    // 利用apply更改this的指向 指向新的对象
    let ret = Constructor.apply(obj, arguments)
    // 判断ret是否是object 如果是对象 返回ret 否则直接返回obj
    return typeof ret === 'object' ? ret : obj
}


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