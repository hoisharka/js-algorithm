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
            return
        }

        let temp = this.root
        while(temp) {
            if(temp.value > newNode.value) {
                if (!temp.left) {
                    temp.left = newNode
                    break;
                }
                temp = temp.left
            } else {
                if (!temp.right) {
                    temp.right = newNode
                    break;
                }
                temp = temp.right
            }
        }
    }
}

const tree = new BinarySearchTree();
