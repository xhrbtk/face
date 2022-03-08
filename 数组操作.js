

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