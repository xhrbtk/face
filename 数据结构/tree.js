// 二叉搜索树
// 二叉搜索树 只允许你在左侧节点存储比父节点小的的值 在右侧节点存储比父节点大或者等于的值
function BinarySearchTree() {
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
        console.log('this.key', this.key)
    }
    this.insert = function(key) {
        console.log('我在insert', key)
        var newNode = new Node(key)
        console.log('newNode', newNode)
        console.log('root', root)
        if (!root) {
            root = newNode
            console.log('root', root.key)
        } else {
            insertNode(root, newNode)
        }
    }
    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode
            } else {
                insertNode(node.rigth, newNode)
            }
        }
    }
}

var tree = new BinarySearchTree()
tree.insert(1)
// tree.insert(2)
// tree.insert(0)

// function preOrder(node) {
//     console.log(node)
//     preOrder(node.left)
//     preOrder(node.right)
// }
// preOrder(1)
