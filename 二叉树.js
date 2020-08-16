// 二叉树 先序遍历
function preOrder(node) {
    if (node) {
        console.log(node)
        preOrder(node.left)
        preOrder(node.right)
    }
}
// 先序遍历 非递归实现
function preOrderTraversal(node) {
    let stack = []
    let res = []
    node && stack.push(node)
    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        cur.right && stack.push(cur.rigth)
        cur.left && stack.push(cur.left)
    }
}

// 中序遍历
function middleOrder(node) {
    if (node) {
        middleOrder(node.left)
        console.log(node)
        middleOrder(node.right)
    }
}

// 中序遍历非递归实现
function middleOrderTraversal(node) {
    let stack = []
    let res = []
    while (stack.length > 0 || node !== null) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            res.push(node.val)
            node = node.right
        }
    }
}

// 后序遍历

function postOrder(node) {
    if (node) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node)
    }
}
/// 和前序遍历区别在于 结果数组res中入栈顺序是当前节点 右孩子 左孩子 最后 使用js数组reverse输出左孩子 右孩子 当前节点
function postOrderTraversal(node) {
    let stack = []
    let res = []
    while (stack.length > 0) {
        let cur = stack.pop()
        res.push(cur.val)
        cur.left && stack.push(cur.left)
        cur.rigth && stack.push(cur.right)
    }
    return res.reverse()
}




// 先序遍历 非递归 根 左 右
function preOrderTraversal(node) {
    let stack = []
    let res = []
    stack.push(node)
    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return res
}
// 后序遍历 左右根 根右左
function postOrderTraversal(node) {
    let stack = []
    let res = []
    stack.push(node)
    while (stack.length) {
        let cur = stack.pop()
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
    return res.reverse() // 输出左右根
}

