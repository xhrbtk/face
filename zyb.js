// get和post区别

// 2.url长度限制原因

// 3.说下其他请求方式

// 4.解释几个常见状态码

// 5.url到页面的流程

// 6.渲染html页面的过程

// 7.重绘重排

// 8.async和defer，附加循环机制

// 9.es6的一些异步方法

// 10.防抖节流的概念和应用场景

// 11.节流的时间边界值处理

// 12.读代码输出，解释原因

// (function(){ var a=b=1; })(); console.log(a=='undefined'); console.log(b=='undefined'); //这题槽点太多，解释起来还挺麻烦的 

// 13.写个冒泡排序，附带验证输入的参数是一个数组

// 14.v-for/v-bind原理

// 14.vue双向绑定原理

// 15.实现一个双向绑定

// .浏览器渲染HTML的步骤

// 2.dom操作

// 3.写一个方法，找到两个数组的最大值（写完），问如果用Math.max怎么实现（apply），问不用apply呢（...运算符）

// 4.原型链

// 5.实现一个计数器

// 6.flex相关，都有哪些属性，写一个布局，左100px，右充满

// 7.vue通信方式，父子兄弟祖孙，

// 8.elementUi中el-input如何实现v-model

// 9.Vue生命周期

// 10.http缓存

// 11.jsonwebtoken

// 上来就简历的项目一通问，每个项目都问细节

// 2.vue的响应式原理

// 3.用户对某页面没有权限，在前端如何处理

// 4.最后问了个如何生成1-9a-zA-Z生成5位随机数

// 映射到62位，生成个0-61的随机数，遍历5遍
// 节流、和防抖的区别，均匀的节流怎么实现【编程】
// 一下子写了最简单的出来，然后他要各种改需求，加功能。要支持配置马上执行、要防抖节流两个结合起来、要均匀

// http缓存、强制缓存里面expire和cache - control作用，什么坑【描述】
// 重点题，频率很高。expire需要保证时间准确

// 前端路由实现。history什么坑，怎么解决【描述】
// 哈希和history，监听事件、切换元素。history会导致一些新路径404，nginx重定向到首页走js逻辑

// var 、let、const区别，() => { } vs function () { } 【描述】
// 基础送分题

// 一副扑克牌，随机抽 5 张，判断是否是顺子，大小王可以替代任意牌。【编程】
// ['A', '2', '3', 'S', 'B'] true
// 先把AJQK映射成数字，然后把大小王S、B换成其他(我直接用symbol代替了) 。排序去掉大小王的数组。遍历排序后数组，前一个数和后一个数字差距大于1，减少大小王数量来补。临界条件：前一个数和后一个数字差距大于1且大小王不够补，return false；成功遍历所有的元素，return true
// 这里有点尴尬，忘记转数字类型了，很快写完了，但一直有问题，傻乎乎的debug，牛客网打印出来的结果也不知道是什么类型，都是黑色字。后面猜测是类型问题，typeof一看，哦果然是类型问题，加一个 + 号转数字，解决

// ES5 实现 B 继承 A【编程】
// 为了表现，肯定是直接写寄生组合继承啦

// 2面面试官喜欢挖问题继续问，防抖节流硬生生写成了一个几十行的轮子了，不过我挺喜欢这种面试模式，临时造轮子改需求，随意天马行空地发挥，很好玩

// 3面

// 项目难点，画一下架构【举例】
// 临时给了一个在线文档地址，然后手绘了架构图

// 有了解其他权限系统吗，对比下【描述】
// 纠结了一阵我做的权限系统究竟是rbac几。前端控制、后端按需返回

// http请求的整个过程【描述】
// 经典题url到页面过程中的一部分——发请求到响应那段

// 怎么知道一个tcp请求数据已经完了呢【描述】

// 微博的@的下面出现一个提示怎么实现(pc上，类似群里讲话按下@，旁边有一个名字下拉框的那个功能)。不是editable喔，基于textarea怎么实现【伪代码】【描述】
// 一下子说了editable，他说你看看，他是textarea。接着有两种方式，隐藏元素+getboundingclientrect和canvas的mesuretext量长度。他后面说量长度不太行，而且很麻烦

// 怎么知道客户端是局域网下哪一个ip【描述】
// 客户端连接服务端的时候会携带自己的ip，服务器接收

// 为什么是tcp而不是udp。tcp丢包怎么办，怎么知道丢包，怎么知道已经重传成功了【描述】
// TCP三次握手保证可靠性，而UDP就没有了，信息发出后,不验证是否到达，不可靠。丢包就重传。有seq，是连续的，如果收到的是不连续，说明中间缺了包；或者是超时了还没收到。因为有seq吧，所以多一个少一个也是知道的

// 了解http3的quic吗【描述】
// udp快而不可靠，所以衍生quic。对比http2+tcp+tls，quic减少了tcp、tls握手，改进了拥塞控制，前向冗余纠错

// quic怎么解决了tcp的问题【描述】
// 使用udp作为基础，瞎讲一通拥塞控制、前向冗余纠错、bbr，所知道的概念都甩出去了

// quic用udp怎么保证了可靠性【描述】
// 用rudp来优化资源的占用率和响应时间，提高系统的并发能力。seq、超时重传、fec前向纠错

// quic的udp如果不握手，人家随便发请求怎么办【描述】
// 滑动窗口、bbr 拥塞算法

// 函数式编程、纯函数【描述】
// 先喘一口气，终于不问网络协议了。纯函数无副作用，同样的输入同样的输出。那我在里面定义变量和函数，里面做一些事情做一些修改这些变量的操作，还纯吗？一样的。

// 状态管理系统设计，怎么和函数式编程结合【描述】【举例】
// 常规react+redux项目举例

// rxjs介绍一下【描述】
// 以前玩过，异步流程控制，流、管道操作符概念

// 数组和链表的区别【描述】
// 数组易读取，链表只能一个个读或者需要额外空间才能易读取；数组增删元素需要照顾index，链表不用

// 数组和链表优点缺点，应用场景【举例】
// 数组增删的时候需要维护index，链表不需要考虑，但链表读取某一项就比较麻烦。很多情况下，简单的列表遍历用哪个都一样。数组的优势在于需要index的时候，随时读取某一个。链表可以模拟任何流程，并可以随时中断/继续，比如react的fiber使用链表可以随时回到当前状态

// 这是部门前端老大了，也是最难的一面了，被虐到狗血淋头。面试官人挺温柔的，前面的题答出来的时候也感觉很舒畅。后面各种被虐，因为不是科班出身，这些知识细节漏了太多，我只能尽自己所了解的都吐出去了，可能说了很多含含糊糊的、没有系统性的东西，知道什么和那个点相关的都讲了。我看见他在旁边笑了(感觉是"你还是太年轻了"的那种笑)，忽然感觉局面很凉，第一次彻底的慌了，然后到了彻底的崩溃。回去我也默认自己三面挂了，结果过了几天，说offer到了。。。

// 最后

// 遇到了本次出去社招最难一面，也充分暴露出野生前端的不足，计算机网络知识不系统，零零散散。这一块后面得回头补一下。

// 他们部门用的是ng全家桶，自动化测试也做得很到位。至于为什么用ng，他们老大说：“因为react生态太丰富了，我们做技术选型或者开发到后面会经常要考虑对比各种方案、要调研，不想花太多时间纠结生态，直接上ng一了百了”。这个理由，挺有道理的，我在我们团队也做过一些系统的前端架构设计、做过技术选型、带头做过升级react，也取得让我引以为傲的效果，但就没有往这个方面去思考过，面试官这个思考角度让我豁然开朗——原来事情可以这样思考。另外，现在ng的ivy也挺出彩的，大家有时间可以去了解一下

// 猿辅导是个很不错的公司，技术也挺强的，而且一般78点下班。还有，别忘了猿辅导是传说中开发实习生800一天的公司，除了这个，福利也挺多、挺到位的

// 作业帮前端一面二面视频面）

// 一面：（52分钟视频面）

// 1.为什么学前端

// 2.你了解的CSS长度单位

// 3.display常见的值以及区别

// 4.你知道哪些元素默认是inline-block的

// 5.position属性的区别

// 6.子容器垂直水平居中

// 7.代码题。数组去重，不能用set。写了个简单版，然后面试官问，你怎么考虑原型上本来就存在的属性，会不会导致判断出错？如何避免？（当时没答上来，我回答了一个Object.create(null)，但后面下来查资料发现可以用hasOwnProperty，面试官也应该想听到我说hasOwnProperty）

// 8.代码题。n*n数组，从a[0][0]走到a[n-1][n-1]有多少种走法。我写的是用递归，然后面试官说，这样子如果n的规模是几十几百你这算法就跑不动了。接着我给面试官说了一下dp（动态规划）的思路。这道题也确实该用递归。

// 9.反问环节

// （哈哈，感觉回答得不好，深层次的东西我知道一些，但我就答的简单的，啊哈哈哈哈...凉凉）


// --------------------------------------------分割线-----------------------------------------------------------------


// 二面：（46分钟视频面）

// 1.个人介绍

// 2.学校有前端的课程吗？

// 3.为什么要选vue这个框架？

// 4.vue生命周期函数

// 5.vue组件的通信

// 6.组件中的data为什么是个函数

// 7.JS解决单线程的方法

// 8.ES5、ES6的区别

// 9.ES6新加的东西，你知道的都说一遍

// 10.Class实现面向对象的原理。Class的继承说一下。

// 11.代码题。给定一个包含大写英文字母和数字的句子，找出这个句子所包含的最大的十六进制整数，返回这个整数的值。数据保证该整数在int表示范围内。例如："012345BZ16" ，最大数“12345B”对应十进制为1193051。

// （这个代码题就很有意思了啊，我最开始写的时候忽略了parseInt的第二个参数导致多写了很大一堆，我傻乎乎的一位一位的加）

// function solve( s ) {     // write code here   // 记录最大的字符串   let maxstr = ''   // 记录最大的值   let maxnum = 0   // 全局匹配符合要求的字符串   let arr = s.match(/[0-9A-F]+/g)   // 记录当前执行的字符串的长度   let templen = 0   for(let i = 0; i < arr.length; i++){       // 这个if是用来过滤比之前运行过的字符串更短的字符串       // 短的字符串肯定比之前的数字小       // 当然还可以直接比较字符串的大小，然后再进行运算     if(arr[i].length >= templen){       templen = arr[i].length       let temp = parseInt(arr[i],16)       if(temp > maxnum){         maxstr = arr[i]         maxnum = temp       }     }   }   return maxnum }

// 12.反问环节

// （我也不知道二面面试官对我的感觉怎么

// 面试官直接说准备了一些问题
// 1，前端有哪些请求，(get,post..)
// 2，option请求在什么情况下会用到(cors跨域)
// 3，什么叫跨域，有什么解决方式
// 4，get与post请求的区别
// 5，XSS攻击(这个说不了解)
// 6，CSS有哪几种选择器
// 7，怎么实现垂直居中，包含的div需要其他样式吗
// 8，<input type=“checkbox"><span>内容</span>，选中的时候把span的内容变成红色，这个回答的不好
// 9，js的基本数据类型有哪些
// 10，说出数组的五种方法
// 11，call和apply的区别
// 12，代码题，实现一个方法，返回一个随机的十六进制的颜色，用数组写的随机，然后面试官提了一种方法，按照他的写正则没写出来
// 13，反问，公司项目用到的什么技术栈，什么时候出面试结果这样。
// 对了还有个题是问有没有做过图片轮播，没有做过，然后说一下思路。
// 补充:
// promise的理解，有哪几种状态
// ajax请求的过程