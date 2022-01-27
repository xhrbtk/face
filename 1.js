








// function test(n){
//     let count = 0
//     while(n > 0){
//         console.log('n', n)
//         count++
//         n = n & (n-1)
//     }
//     console.log(count)
// }

// test(25)

let arr = [1,2,3,4]
function d(arr){
    let len = arr.length
    let res = []
    let obj = {}
    let dfs = (arr, index, temp) => {
        if(index == len){
            res.push(temp.slice())
            return 
        }else{
            temp.push(arr[index])
            dfs(arr, index+1, temp)
        }
        
    }
    dfs(arr, 0, [])
    console.log(res)
}

d(arr)