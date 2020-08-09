// 先序遍历
function preOrder(node) {
    if (node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}
// 中序遍历
function middleOrder(node) {
    if (node) {
        middleOrder(node.left)
        console.log(node.value)
        middleOrder(node.right)
    }
}
// 后序遍历
function postOrder(node) {
    if (node) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}