// var isxx = false;
// var isnumber = 6;
// var namexx = 'xx';
// var list = [1, 2];
// var list1 = ['a'];
// // 数组泛型 Array<元素类型>
// var list3 = [1, 3];
// var list4 = ['1'];
// // 元组 表示一个已知元素数量和类型的数组 各元素的类型不必相同 
// var x;
// x = ['hello', 3];
// // 枚举
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
// var c = Color.Green;
// console.log(c);
// console.log('xx');

// let arr = [1,2,3,4]

// function xx(arr){
//    let obj = {}
//    let resultArr = []
//    let dfs = (temp) => {
//         if(temp.length == arr.length){
//             resultArr.push(temp.slice())
//             return 
//         }
//         for(let i = 0; i < arr.length; i++){
//             if(obj[i]) continue 
//             temp.push(arr[i])
//             obj[i] = true
//             dfs(temp)
//             temp.pop()
//             obj[i] = false
//         }
//    }
//    dfs([])
//    console.log(resultArr)
// }
// xx(arr)

let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
function arrToTree(items){
    let result = []
    let itemMap = {}
    for(let item of items){
        let id = item.id
        let pid = item.pid
        if(!itemMap[id]){
            itemMap[id] = {
                children: []
            }
        }
        itemMap[id] = {
            ...item,
            children: itemMap[id]['children']
        }
        let treeItem = itemMap[id]
        if(pid === 0){
            result.push(treeItem)
        }else{
            if(!itemMap[pid]){
                itemMap[pid] = {
                    children: []
                }
            }
            itemMap[pid].children.push(treeItem)
        }
    }
    console.log(result)
}
arrToTree(arr)