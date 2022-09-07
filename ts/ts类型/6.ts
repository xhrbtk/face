// 用a.kind 区分a的类型
type Circle = { kind: 'Circle', center: [number, number] }
type Square = { kind: 'Square', sideLength: number }
type Shape = Circle | Square

const f1 = (a: Shape) => {
    if (a.kind === 'Circle') {
        a
    } else {
        a
    }
}