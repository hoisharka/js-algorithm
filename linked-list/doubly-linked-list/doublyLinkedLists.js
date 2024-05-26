class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }
    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }
    pop() {
        // my solution

        // if (!this.head) return undefined
        // const temp = this.tail
        // const prev = this.tail.prev
        // if (prev) {
        //     prev.next = null
        //     this.tail = prev
        // }

        // this.length--
        // if (this.length === 0) {
        //     this.head = null
        //     this.tail = null
        // }
        // return temp

        if (!this.head) return undefined
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    shift() {
        if (this.length === 0) return undefined
        const shiftedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        shiftedNode.next = null
        this.length--
        return shiftedNode
    }
    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        if (index > Math.floor(this.length / 2)) {
            // 뒤에서
            let current = this.tail
            let count = this.length - 1
            while (count !== index) {
                current = current.prev
                count--
            }
            return current
        }
        // 앞에서
        let current = this.head
        let count = 0
        while (count !== index) {
            current = current.next
            count++
        }
        return current
    }
    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode !== null) {
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) { return !!this.unshift(val) }
        if (index === this.length) { return !!this.push(val) }

        const newNode = new Node(val)
        const beforeNode = this.get(index - 1)
        const afterNode = beforeNode.next
        beforeNode.next = newNode, newNode.prev = beforeNode
        newNode.next = afterNode, afterNode.prev = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) { return this.shift() }
        if (index === this.length) { return this.pop() }

        const removedNode = this.get(index)
        const beforeNode = removedNode.prev
        const afterNode = removedNode.next
        beforeNode.next = afterNode, afterNode.prev = beforeNode
        removedNode.prev = null
        removedNode.next = null
        this.length--
        return removedNode
    }
    print() {
        const arr = []
        let current = this.head
        while (current) {
            arr.push(current)
            current = current.next
        }
        console.log(arr)
    }
}



const list = new DoublyLinkedList()
list.push(1)
console.log(list)
list.push(2)
console.log(list)
