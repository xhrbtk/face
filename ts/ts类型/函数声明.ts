

function f1(a: number): number {
    return a + 1
}

type F2 = (x: number) => number
const f2: F2 = function (a) {
    return a + 1
}

type F3 = (x: number) => number
const f3: F3 = (a) => {
    return a + 1
}


function addEventListener(eventType: string, fn: (this: HTMLElement, e: Event) => void, useCapture?: boolean) {
    if (useCapture === undefined) {
        useCapture = false
    }
    const element = {} as HTMLElement //断言
    const event = {} as Event // 断言

    fn.call(element, event)
    console.log(eventType, fn, useCapture)
}
addEventListener('click', () => 1)



// 函数科利华
const add = (a: number, b: number) => a + b
type CreatAdd = (x: number) => (y: number) => number
const creatAdd: CreatAdd = a => b => a + b

creatAdd(6)(14)



export { }