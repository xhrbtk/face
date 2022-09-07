

// 类型谓词 is
type Rect = {
    width: number
    height: number
}

type Circle = {
    center: [number, number]
    radius: number
}

const f1 = (a: Rect | Circle) => {
    if (isRect(a)) {
        a
    } else if (isCircle(a)) {
        a
    }
}

function isRect(x: Rect | Circle): x is Rect {
    return 'height' in x && 'width' in x
}
function isCircle(x: Rect | Circle): x is Circle {
    return 'center' in x && 'radius' in x
}
export { }