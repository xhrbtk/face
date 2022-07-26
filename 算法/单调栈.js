
// 单调栈模版
// 找更大的数 倒着循环遍历
function nexGreaterElement(arr) {
    let len = arr.length
    let stack = []
    let nums = []
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length && arr[i] >= stack[stack.length - 1]) {
            stack.pop()
        }
        nums[i] = stack.length > 0 ? stack[stack.length - 1] : -1
        stack.push(arr[i])
    }
}