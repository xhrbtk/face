

let isxx: boolean = false
let isnumber: number = 6
let namexx: string = 'xx'

let list: number[] = [1, 2]
let list1: string[] = ['a']
// 数组泛型 Array<元素类型>
let list3: Array<number> = [1, 3]
let list4: Array<string> = ['1']

// 元组 表示一个已知元素数量和类型的数组 各元素的类型不必相同 
let x: [string, number]
x = ['hello', 3]

// 枚举
enum Color { Red, Green, Blue }
let cxx: Color = Color.Green;

// void 某种程度上 void类型和any类型是相反的 它表示咩有任何类型 当一个函数没有返回值时 你通常会看到其返回值类型是void

// Object 表示非原始类型 也就是除number string boolean symbol null 或 undefined 之外的类型

// 泛型
function identity<T>(arg: T): T {
    return arg;
}