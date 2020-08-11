// 移动端1px

// div:after{
//     conent: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 200%;
//     transform: scale(0.5);
//     transform-origin: left top;
//     box-sizing: border-box;
//     z-index: 990;
//     border: 1px solid #e5e5e5;
// }

let arr = [1, 2, 3, 4, [5, 6, [7, 8]]]

function flat(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (Array.isArray(item)) {
            flat(item, res)
        } else {
            res.push(item)
        }
    }
    return res
}
let xx = flat(arr, [])
console.log('xx', xx)
sum = xx.reduce((acc, cur) => {
    return acc + cur
}, 0)
console.log('sum', sum)
