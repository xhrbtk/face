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