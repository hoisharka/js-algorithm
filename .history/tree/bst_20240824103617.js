class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if(!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root
        while(true) {
            if(value === current.value) return undefined
            if(value < current.value) {
                if (!current.left) {
                    current.left = newNode
                    return this;
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode
                    return this;
                }
                current = current.right
            }
        }
    }

    find(value) {
        if (!this.root) { return false }

        let current = this.root
        while(current) {
            if(value === current.value) return current
            current = value < current.value ? current.left : current.right
        }
        return false
    }
}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(15)
tree.insert(6)
tree.insert(20)
tree.insert(8)
tree.insert(3)
tree.insert(13)

console.log(tree)