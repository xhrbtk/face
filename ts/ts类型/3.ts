// 松散的函数类型检查
type FnA = (a: number, b: number) => number
type FnB = (x: string, y: string) => string

type FnRetrunVoid = (s: string) => void
type FnRetrunUndefined = (s: string) => undefined

const v: FnRetrunVoid = (s: string) => {
    console.log(s)
}
// 定义了 返回值undefined 必须返回undefined
const u: FnRetrunUndefined = (s: string) => {
    console.log(s)
    return undefined
}



// 带this

type Person = {
    name: string,
    age: number,
    sayHi: FnWithThis
}
type FnWithThis = (this: Person, name: string) => void

const sayHi: FnWithThis = function () {
    console.log('hi', this.name)
}
const x: Person = {
    name: 'frank',
    age: 18,
    sayHi: sayHi
}
x.sayHi('jack')
sayHi.call(x, 'jack')