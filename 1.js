

// hash 和 history模式 
// hash 是hashchange
// history 是 popstate

function a(str){
    console.log(str)
}
// let _new = function(){
//     let C = [].shift.call(arguments)
//     let args = arguments
//     let obj = {}
//     obj.__proto__ = C.prototype
//     C.call(obj, ...args)
//     return obj
// }
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype)
    const ret = fn.apply(obj, arg)
    return ret instanceof Object ? ret : obj
}
let b = _new(a, '今天是个好日子')
console.log(b)