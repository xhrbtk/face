

// hash 和 history模式 
// hash 是hashchange
// history 是 popstate

// 归并排序 复杂度 O(nlogn)   分治法 将原始数组切分成较小的数组 直到每个小数组只有一个位置 接着将小数组归并成较大的数组 直到最后只有一个排序完毕的大数组
// let arr = [2, 1, 3, 7, 56, 89, 43, 21]
// function mergeSort(arr) {
//     let len = arr.length
//     if (len == 1) return arr
//     let mid = len >>> 1
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(arr1, arr2) {
//     let result = []
//     let il = 0
//     let ir = 0
//     while (il < arr1.length && ir < arr2.length) {
//         if (arr1[il] < arr2[ir]) {
//             result.push(arr1[il])
//             il++
//         } else {
//             result.push(arr2[ir])
//             ir++
//         }
//     }
//     while (il < arr1.length) {
//         result.push(arr1[il])
//         il++
//     }
//     while (ir < arr2.length) {
//         result.push(arr2[ir])
//         ir++
//     }
//     return result
// }


// console.log(mergeSort(arr))

let arr = [3, 2, 2, 3]
// 暴力解法
// function removeElement(arr) {
//     let len = arr.length
//     for (let i = 0; i < len; i++) {
//         if (arr[i] == 3) {
//             for (let j = i + 1; j < len; j++) {
//                 arr[j - 1] = arr[j]
//             }
//             i--
//             len--
//         }
//     }
//     return { arr, len }
// }

// let t = removeElement(arr)
// console.log(t)


// 双指针

function removeElement(arr) {
    let len = arr.length
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < len; fastIndex++) {
        if (arr[fastIndex] != 3) {
            arr[slowIndex++] = arr[fastIndex]
            console.log(slowIndex)
        }
    }
    return { arr }
}

console.log(removeElement(arr))