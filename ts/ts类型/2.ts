
// 由于Array太不精确 所以ts 开发者一般使用 Array<?> 或 string[] 或 [string, number] 来描述数组

type A = string[]
const a: A = ['h', 'i']
//type A = Array<string>

type B = number[]
const b: B = [1, 2]
// type B = Array<number>

type D = [string, string, string]
const noError: D = ['我', '爱', '你']
const error: D = ['h', 'i']


type E = [string, string]  //二元组
const e: E = ['小明', 100]

type F = [string[], number[]]
const f: F = [['柴', '米', '油', '盐'], [1, 2, 3]]



