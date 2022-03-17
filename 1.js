
function shallowClone(source){
    let target = {}
    for(let i in source){
        console.log(i, source)
        if(source.hasOwnProperty(i)){
            target[i] = source[i]
        }
    }
    return target
}

let a = { 
    name: 'xhr',
    arr: [1,2,3],
    b: function(){console.log('x')},
    c: new Date(),
    e: (b) => b,
    regex: /\.(j|t)/
}
a.self = a
console.log(a)
let cache = new Map()
function deepClone(a){
    if(cache.get(a)) return cache.get(a)
    if(a instanceof Object){
        let result 
        if(a instanceof Function){
            if(a.prototype){
                result = function(){ return a.apply(this, ...arguments) }
            }else{
                result = (...args) => a.apply(undefined, ...args)
            }
        }else if(a instanceof Array){
            result = []
        }else if(a instanceof Date){
            result = new Date(a-0)
        }else if(a instanceof RegExp){
            result = new RegExp(a)
        }else{
            result = {}
        }
        cache.set(a, result)
        for(let key in a){
            if(a.hasOwnProperty(key)){
                result[key] = deepClone(a[key])
            }
        }
        return result
    }else{
        return a
    }
}

let x = deepClone(a)
x.arr[0] = 'dsfs'
console.log(a)
console.log(x)

// null undefined bool string number bigInt symbol Object