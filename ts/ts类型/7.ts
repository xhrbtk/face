//  函数的参数兼容

let 接受一个参数的函数 = (a: number) => {
    console.log(a)
}

let 接受两个参数的函数 = (b: number, s: string) => {
    console.log(s, b)
}


// 少传可以用默认参数 多传 处理不了
接受两个参数的函数 = 接受一个参数的函数 // ok
接受一个参数的函数 = 接受两个参数的函数 // 报错


// 参数类型不同 可以互相赋值吗？
//  对参数要求少的可以赋值给对参数要求多的 反之不成立

interface MyEvent {
    target: string
}

interface MyMouseEvent extends MyEvent {
    x: number,
    y: number
}

let listener = (e: MyEvent) => console.log(e.target)

let mouseLisener = (e: MyMouseEvent) => console.log(e.x, e.y)

mouseLisener = listener
listener = mouseLisener


// 返回值 
let 返回值属性少集合大 = () => {
    return { name: 'x' }
}
let 返回值属性多集合小 = () => {
    return { name: 'x', location: 'seattle' }
}

返回值属性少集合大 = 返回值属性多集合小
返回值属性多集合小 = 返回值属性少集合大


