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
        if (!this.root) { return undefined }

        let current = this.root
        while(current) {
            if(value === current.value) return current
            current = value < current.value ? current.left : current.right
        }
        return undefined
    }

    contains(value) {
        if (!this.root) { return false }

        let current = this.root
        while(current) {
            if(value === current.value) return true
            current = value < current.value ? current.left : current.right
        }
        return false
    }

    breathFirstSearch() {
        if (!this.root) return []
        const visited = []
        const queue = [this.root]

        let node
        while(node = queue.shift()) {
            visited.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        
        return visited
    }

    DFSPreOrder() {
        if (!this.root) return []
        const data = []
        const traverse = (node) => {
            data.push(node.value)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
                
        return search(this.root)
    }

    DFSAfterOrder() {
        if (!this.root) return []
        const search = (node) => {
            if (!node) {
                return []
            }
            if (!node.left && !node.right) {
                return [node.value]
            }
            return [
                ...search(node.left), 
                ...search(node.right),
                node.value
            ]
            
        }
                
        return search(this.root)
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

console.log(tree.find(8))
console.log(tree.find(1))

console.log(tree.breathFirstSearch())
console.log(tree.DFSPreOrder())
console.log(tree.DFSAfterOrder())