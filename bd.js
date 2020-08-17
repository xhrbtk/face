// 题目：构造二叉树数据结构，实现先序遍历（递归，非递归）
// 出题人：胡显志
// 难度：中
// 考察点：
//     深度加广度，数据结构，递归，栈，面对问题的解决能力

// tips：非递归可做适当提示，用栈

// 参考代码：

// // 节点对象
// function Node(data, left, right) {
//    this.data = data;  // 节点值
//    this.left = left;  // 当前节点的左子节点
//    this.right = right;  // 当前节点的右子节点
// }

// // 创建一个节点
// const root = new Node(data, null, null);

// //打印数据
// function cb(data) {
//     console.log(data);
// }

// // 先序遍历
// // 1.使用递归
// function preOrderTraverse(node, cb) {
//     if(!!node) {
//         cb(node.data);
//         preOrderTraverse(node.left, cb);
//         preOrderTraverse(node.right, cb);
//     }
// }

// // 2.非递归
// function preOrderTraverse(node, cb) {
//     if(!node) {
//         throw new Error('空树');
//     }
//     let stack = [];
//     stack.push(node);
//     while(stack.length !== 0) {
//         node = stack.pop();
//         cb(node.data);
//         // 此处先右后左，因为pop时是逆序
//         if(node.right) {
//             stack.push(node.right);
//         }
//         if(node.left) {
//             stack.push(node.left);
//         }
//     }
// }



// 题目：使用正则实现中横线转驼峰 如：border-top-width -> borderTopWidth
// 出题人：原力 
// 难度：一般
// 考察点
//     - 正则的基本用法：语法、特殊字符、转义、分组、标识符
//     - 字符串replace返回值
//     - 如果不会正则，降级考察字符串、数组的基本用法
// 参考代码：
// const toCamelCase = (str='')=>{
//     const re = /-(\w)/g;

//     return str.replace(re, ($1,$2)=>{
//         return $2.toUpperCase();
//     });
// };

// console.log(toCamelCase('border-top-width'));

// 正则扩展备选

// // 手机号、银行卡号只显示后四位，主要考察对断言的理解
// (function(){
//     var re = /\d(?=\d{4})/g;
//     var str = '18689161829';
//     console.log(str.replace(re,'*')); // *******1829
// })();

// // 手机号显示为 ***-****-****
// (function(){
//     var re = /(\d{3})(\d{4})(\d{4})/;
//     var str = '18689161829';
//     var arr = re.exec(str);
//     arr.shift();
//     var newStr = arr.join('-');
//     console.log(newStr);
// })();

// 题目：场景题如图所示，如何实现用户上传一张图片，在图片上拼接一个「武汉加油」的icon。
// 出题人：蒋子晨 
// 难度：中
// 考察点
//     - canvas的基本用法、formdata、跨域等

// 参考代码
// canvas  <- document.createElement('cavans') // 创建canvas元素
// ctx <- canvas.getContext('2d') // 获取elem的上下文
// ctx.drawImage(底图，0（x轴位置), 0(y轴位置)) // 绘制底图
// ctx.drawImage(底图，0（x轴位置), 图片高度与icon的差(y轴位置)) // 绘制icon
// canvas.toBlob // 将html元素转为blob文件




// 题目：前端安全相关csrf，什么是csrf、如果构造一个csrf攻击、如何防止csrf攻击
// 出题人：原力 
// 难度：中
// 考察点
// - 对csrf的理解

// 参考答案：
// https://mp.weixin.qq.com/s?__biz=MjM5NjQ5MTI5OA==&mid=2651748960&idx=3&sn=93b468b875ee1e2d72c0a0c3464831a3&chksm=bd12a32d8a652a3b580b1ccac86c98204691dffa8ef1dbef3ac65fe7bca2ac9d6562a45aa501&mpshare=1&scene=1&srcid=12076o2m6iOmEAFUGxuZQg3U%23rd