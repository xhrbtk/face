import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"


const code = `let a = 'let'; let b = 2`
const ast = parse(code , { sourceType: 'module' })
console.log(ast)
traverse(ast, {
    enter: item => {
        // 将ast里面的变量声明的let 改为var
        if(item.node.type === 'VariableDeclaration'){
            if(item.node.kind === 'let'){
                item.node.kind = 'var'
            }
        }
    }
})
// 将ast变成code
const result = generate(ast, {}, code)
console.log(result.code)