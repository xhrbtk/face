// vue.set 如何实现数据响应式的
// 1.如果设置的对象是个数组 则采用数组的splice方法进行操作通知
// 2.如果key已经在target里面了 说明本来就是响应式数据  直接进行赋值操作
// 3.如果target 如果不是响应式数据 则不用做任何操作 做了也没用 如果是响应式数据 则进行defineReactive进行响应式 然后进行ob.dep.notify()

// $watch: 是watch方法 底层是声明了一个new watcher（）实现的

// 数据响应式 initstate数据响应式起始 observe返回ob实例 ob对value做响应式
// Observer判断value类型创建小秘书ob 如果是对象类型就走definereactive数据访问拦截
// 如果是数组 走observeArray（）
// Dep依赖管理变更通知 一个对象一个observer 一个key一个dep observer负责对象的增删更新通知 dep负责对应key的值的变化的更新通知
//

// initdata开始将data传递给observe 开始循环递归的进行响应式化 observe为每一个对象生成一个ob实例 ob实例会管理该对象的增删更新通知
// observer判断类型 分辨传过来的对象是 对象还是数组 如果是对象则进行defineReactive方法进行
// walk 对于传进来的对象进行遍历响应式
// ---Dep dep.depend 调用的是watcher的adddep方法 保存当前watcher相关的所有dep实例 把当前watcher实例假如到dep中
// defineReactive 每个key对应一个dep 进行get和set拦截
// 在get里面进行依赖收集 创建dep和watcher之间的多对多关系映射
// 在set的时候 进行数据的变更 及dep.notify()

// 数组数据变化的侦测跟对象不同，我们操作数组通常使用push、pop、splice等方法，
// 此时没有办法得 知数据变化。所以vue中采取的策略是拦截这些方法并通知dep。

// vue总体流程
// new Vue ---- init ---- mount ---- render ---- update
// 创建组件实例 --- 执行挂载获取vdom并转换为dom --- 渲染组件获取vdom --- 执行更新将传入的vdom转换为dom 初始化执行的是dom创建操作

// 事件循环 浏览器为了协调事件处理 脚本执行 网络请求和渲染等任务而指定的一套工作机制
// 宏任务 代表一个个离散的 独立工作单元 浏览器完成一个宏任务 在下一个宏任务执行开始前 会对页面进行重新渲染
// 主要包括创建主文档对象 解析html 执行主线js代码以及各种事件如页面加载 输入 网络事件和定时器等

// 微任务 微任务是更小的任务 是在当前红任务执行结束后立即执行的任务 如果存在微任务 浏览器会清空微任务之后再重新渲染
// 微任务的例子有promise回掉函数 dom发生变化

// vue.$nextTick(callback) promise.then --> mutationobserver ----> setImmediate ----> settimeout
// 频繁的更新 只会在第一次入队 后面的更新都不会入队 只是改了值但是浏览器的dom更新咩有做

// patchnode
// 1.新老节点均有children子节点 则对子节点进行diff操作 调用upadatechildren
// 2.如果老节点没有子节点而新节点有子节点 先清空老节点的文本内容 然后为其新增子节点
// 3.当新节点没有子节点而老节点有子节点的时候 则移除该节点的所有子节点
// 4.当新老节点都无子节点的时候 只是文本的替换

// Vue 的父组件和子组件生命周期钩子执行顺序是什么
// 父组建： beforeCreate -> created -> beforeMount
// 子组件： -> beforeCreate -> created -> beforeMount -> mounted
// 父组件： -> mounted
// 总结：从外到内，再从内到外

// GET 和 POST 的区别
// GET在浏览器回退时是无害的，而POST会再次提交请求。
// GET产生的URL地址可以被加入收藏栏，而POST不可以。
// GET请求会被浏览器主动cache，而POST不会，除非手动设置。
// GET请求只能进行url编码，而POST支持多种编码方式。
// GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
// GET请求在URL中传送的参数是有长度限制的，而POST么有。
// 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
// GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
// GET参数通过URL传递，POST放在Request body中。

// 我是爸爸的breaforecreate
// App.vue?234e:45 我是爸爸的created
// App.vue?234e:48 我是爸爸的beforeMount
// HelloWorld1.vue?e268:16 我是儿子的breaforecreate
// HelloWorld1.vue?e268:19 我是儿子的created
// HelloWorld1.vue?e268:22 我是儿子的beforeMount
// HelloWorld1.vue?e268:25 我是儿子的mounted
// App.vue?234e:51 我是爸爸的mounted
