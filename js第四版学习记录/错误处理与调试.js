//  只要代码中包含了finaly子句 try块或catch 块中的return语句就会被忽略 理解这一点很重要 在使用finaly时一定要仔细确认代码的行为
// finaly 是最终肯定要执行的
async function testFinally() {
    try {
        console.log(2)
        a == b
        return 1
    } catch (error) {
        // console.log(error)
        throw { type: 'xx', name: 'test' }
    } finally {
        console.log(0)
    }
}
testFinally()
// 使用throw 抛出错误 外层catch会捕获到这个error  

async function testThrow() {
    try {
        console.log('testThrow')
        await testFinally()
    } catch (error) {
        console.log('xx', error)
    }
}

testThrow()

// 定义window.onerror 事件处理程序 所有没有通过try/catch 处理的错误都会被该事件处理程序收到（仅限ie firefox chrome）

window.onerror = (message, url, line) => {
    // message 错误消息  发生错误的url 和 行号
    console.log(message)
}

// debugger关键字调试