

// array.join 实际上是Array.prototype.join对应的函数
// array.join('-') 等价与 array.join.call(array, '-')
// join 函数通过this和arguments[0]可以得到array和'-'两个值 
Array.prototype.join = function (char) {
    let result = this[0] || ''
    let length = this.length
    for (let i = 1; i < length; i++) {
        result += char + this[i]
    }
    return result
}

// 伪数组与真数组的区别是 伪数组的原型链中没有Array.prototype 而真数组的原型链中有Array.prototype 因此伪数组没有pop和join等属性

// 数组转tree
let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
function arrToTree(arr){
    let result = []
    let map = new Map()
    for(let item of arr){
      map.set(item.id, { ...item, children: []})
    }
    for(let item of arr){
        let { id, pid } = { ...item }
        if(map.get(pid)){
            map.get(pid).children.push(map.get(id))
        }else{
            result.push(map.get(id))
        }
    }
    console.log(result)
}
arrToTree(arr)

// 移动端1px

// div:after{
//     conent: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 200%;
//     transform: scale(0.5);
//     transform-origin: left top;   // transform-origin 属性可以使用1个 两个 或者 3个值 来指定 其中每个值都表示一个偏移量
//     box-sizing: border-box;
//     z-index: 990;
//     border: 1px solid #e5e5e5;
// }

// 数组扁平化
let arr = [1, 2, 3, 4, [5, 6, [7, 8]]]

function flat(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (Array.isArray(item)) {
            flat(item, res)
        } else {
            res.push(item)
        }
    }
    return res
}
let xx = flat(arr, [])
console.log('xx', xx)
sum = xx.reduce((acc, cur) => {
    return acc + cur
}, 0)
console.log('sum', sum)



let arr = [1, 3, 4, 45, 23, 234]
function x(n) {
    return function (item) {
        return item > n
    }
}

let match = x(25)
let xx = arr.filter(match)
console.log(xx)
console.log(arr)

// 关于输入框非空的判断 空值合并运算符 ？？
// 扁平化数组
// 