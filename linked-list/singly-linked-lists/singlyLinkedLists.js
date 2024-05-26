/**
 * 여러 노드들이 단방향으로 다음 노드 또는 null을 가리킴.(다음이 null인 경우 마지막 노드.)
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var first = new Node("hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")
console.log(first)

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let current = this.head
        let newTail = this.head
        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        const current = this.head
        this.head = current.next
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }

        let count = 0
        let current = this.head
        while (count !== index) {
            current = current.next
            count++
        }
        return current
    }
    set(index, val) {
        const node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        const newNode = new Node(val)
        const prev = this.get(index - 1)

        // solution
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp

        // my solution
        // newNode.next = prev.next
        // prev.next = newNode

        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift(val)
        if (index === this.length) return this.pop(val)
        const prev = this.get(index - 1)
        const removed = prev.next
        prev.next = removed.next
        this.length--
        return removed
    }
    reverse() {
        // my solution
        // if (this.length < 2) {
        //     return this
        // }

        // let current = this.head
        // let next = current.next
        // let temp = next?.next

        // this.tail = this.head
        // this.tail.next = null
        // let prev = current

        // while(temp) {
        //     current = next
        //     next = current?.next
        //     temp = next?.next

        //     current.next = prev
        //     prev = current
        // }
        // if (next) {
        //     next.next = current
        // }        
        // this.head = next

        // return this

        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev

            prev = node
            node = next
        }
        return this
    }

    print() {
        const arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// // console.log(list)
// list.push("GOODBY")
// // console.log(list)
// console.log(list.pop())
// console.log(list)

// console.log(list.pop())
// console.log(list)

// console.log(list.unshift(300))
// console.log(list.unshift(200))
// console.log(list.unshift(100))
// console.log(list.insert(2, 250))
// console.log(list)
// console.log(list.remove(2))
// console.log(list)

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.reverse()
list.print()
