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

    enqueue(val) {
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
stack.enqueue(1)
stack.enqueue(2)
stack.enqueue(3)
console.log(stack.dequeue())
stack.enqueue(4)
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.dequeue())
console.log(stack.last)