class treeNode {
    data: number;
    leftChild: treeNode | null;
    rightChild: treeNode | null;

    constructor(data: number) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class myBinaryTree {
    parent: treeNode | null;

    constructor() {
        this.parent = null;
    }

    insert(data: number) {
        let newNode = new treeNode(data);
        if (this.parent === null) {
            this.parent = newNode;
        } else {
            this.insertNode(this.parent, newNode);
        }
    }

    protected insertNode(treeNode: treeNode, newNode: treeNode) {
        if (newNode.data < treeNode.data) {
            if (treeNode.leftChild === null) {
                treeNode.leftChild = newNode;
            } else {
                this.insertNode(treeNode.leftChild, newNode);
            }            
        } else {
            if (treeNode.rightChild === null) {
                treeNode.rightChild = newNode;
            } else {
                this.insertNode(treeNode.rightChild, newNode);
            }
        }
    }

    search(treeNode: treeNode | null, data: number): treeNode | null {
        if (treeNode === null) {
            return null;
        }
        if (data < treeNode.data) {
            return this.search(treeNode.leftChild, data);
        }
        if (data > treeNode.data) {
            return this.search(treeNode.rightChild, data);
        }

        return treeNode;
    }

    minNode(treeNode: treeNode): treeNode {
        if (treeNode.leftChild === null)
            return treeNode
        else 
            return this.minNode(treeNode.leftChild)
    }

    remove(data: number) {
        this.parent = this.removeNode(this.parent, data)
    }

    protected removeNode(treeNode: treeNode | null, data: number): treeNode | null {
        if (treeNode === null) {
            return null
        } else if (data < treeNode.data) {
            treeNode.leftChild = this.removeNode(treeNode.leftChild, data)
            return treeNode
        } else if (data > treeNode.data) {
            treeNode.rightChild = this.removeNode(treeNode.rightChild, data)
            return treeNode
        } else {
            if (treeNode.leftChild === null && treeNode.rightChild === null) {
                treeNode = null
                return treeNode
            }

            if (treeNode.leftChild === null) {
                treeNode = treeNode.rightChild
                return treeNode
            } else if (treeNode.rightChild === null) {
                treeNode = treeNode.leftChild
                return treeNode
            }

            let newNode = this.minNode(treeNode.rightChild)
            treeNode.data = newNode.data
            treeNode.rightChild = this.removeNode(treeNode.rightChild, newNode.data)
            return treeNode
        }
    }
}

let tree = new myBinaryTree()
tree.insert(11)
tree.insert(8)
tree.insert(20)
tree.insert(50)
tree.insert(44)
tree.insert(1)
console.log(tree)
tree.remove(20)
console.log(tree)
console.log(tree.search(tree.parent,44))
