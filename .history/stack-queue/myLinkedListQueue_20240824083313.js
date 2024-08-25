class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    inqueue(val) {
        const newNode = new Node(val)
        if (this.first === null) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    dequeue() {
        if (!this.first) return null
        const temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }

}

const stack = new Stack()
stack.inqueue(1)
stack.inqueue(2)
stack.inqueue(3)
console.log(stack.dequeue())
stack.inqueue(4)
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.last)