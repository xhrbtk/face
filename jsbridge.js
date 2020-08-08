

// 实现原理类似于jsonp
// 1 首先在h5中注入一个callback方法，放在window对象中 然后把callback的名字 通过url schema传到native
// 2 native 通过shouldOverrideUrlLoading()拦截到webview的请求 并通过与前端约定好的url schema判断是否是jsb调用
// 3. native解析出前端带上的callback 并使用下面方式调用callback


// 1234 "4321"
function test(num) {
    let str = ''
    let getStr = function (num) {
        if (num % 10) {

        }
    }
}