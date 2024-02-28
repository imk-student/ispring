class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinaryTree {
    constructor() {
        this.parent = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.parent === null) {
            this.parent = newNode;
        } else {
            this.insertNode(this.parent, newNode);
        }
    }

    insertNode(node, newNode) {
        
        if (newNode.data < node.data) {
            if (node.leftChild === null) {
                node.leftChild = newNode;
            } else {
                this.insertNode(node.leftChild, newNode);
            }            
        } else {
            if (node.rightChild === null) {
                node.rightChild = newNode;
            } else {
                this.insertNode(node.rightChild, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            return this.search(node.leftChild, data);
        }
        if (data > node.data) {
            return this.search(node.rightChild, data);
        }

        return node;
    }

    minNode(node) {
        if (node.leftChild === null)
            return node
        else 
            return this.minNode(node.leftChild)
    }

    remove(data) {
        this.parent = this.removeNode(this.parent, data)
    }

    removeNode(node,data) {
        if (node === null) {
            return null
        } else if (data < node.data) {
            node.leftChild = this.removeNode(node.leftChild, data)
            return node
        } else if (data > node.data) {
            node.rightChild = this.removeNode(node.rightChild, data)
            return node
        } else {
            if (node.leftChild === null && node.rightChild === null) {
                node = null
                return node
            }

            if (node.leftChild === null) {
                node = node.rightChild
                return node
            } else if (node.rightChild === null) {
                node = node.leftChild
                return node
            }

            let newNode = this.minNode(node.rightChild)
            node.data = newNode.data
            node.rightChild = this.removeNode(node.rightChild, newNode.data)
            return node
        }
    }
}

