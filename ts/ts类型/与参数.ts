

// 函数析构
type Config = {
    url: string
    method: 'GET' | 'POST' | 'PATH' | 'DELETE'
    data?: unknown
    headers?: unknown
}

function ajax({ url, method, ...rest }: Config = { method: 'GET', url: '' }) {
    console.log(url, method)
}

// 返回值void
function f1(): void {
    return
}
function f2(): void {
    return undefined
}
function f3(): void { }
// 不支持 返回null
function f4(): void {
    return null
}