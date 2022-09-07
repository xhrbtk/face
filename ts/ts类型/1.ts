type Person = {
    name: string
    age: number
}
const a: Person = {
    name: 'kl',
    age: 18
}

// A 表示key 为string value 为 number的所有对象 k可以换成任意单词
// key的类型可以不是string 可以是 number 和 symbol

// 索引签名
type A = {
    [k: string]: number
}

const b: A = {
    name: 1,
    age: 2
}
// record 泛型
type A2 = Record<string, number>

type A3 = {
    name: string,
    age: number
}


