// 二叉搜索树
// 二叉搜索树 只允许你在左侧节点存储比父节点小的的值 在右侧节点存储比父节点大或者等于的值
function BinarySearchTree() {
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
        console.log('this.key', this.key)
    }
    var root = null
    this.insert = function(key) {
        console.log('我在insert', key)
        var newNode = new Node(key)
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
                console.log('node---', node)
            } else {
                insertNode(node.rigth, newNode)
            }
        }
    }
}

function Node(key) {
    this.key = key
    this.left = null
    this.right = null
}

class BinarySearchTree1 {
    constructor() {
        this.root = null
    }
    insert(key) {
        let newNode = new Node(key)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        // 从小到大 左根右
        if (newNode.key > node.key) {
            if (node.right == null) {
                node.right = newNode
                console.log('---root---right', this.root)
            } else {
                this.insertNode(node.right, newNode)
            }
        } else {
            if (node.left == null) {
                node.left = newNode
                console.log('---root---left', this.root)
            } else {
                this.insertNode(node.left, newNode)
            }
        }
    }
}

var tree1 = new BinarySearchTree1()
tree1.insert(11)
tree1.insert(7)
tree1.insert(15)
tree1.insert(5)
// tree1.insert(3)
// tree1.insert(9)
// tree1.insert(8)
// tree1.insert(10)
// tree1.insert(13)
// tree1.insert(12)
// tree1.insert(14)
// tree1.insert(20)
// tree1.insert(18)
// tree1.insert(25)
