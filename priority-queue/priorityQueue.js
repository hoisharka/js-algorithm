class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }

    myEnqueue(val, priority){
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        let idx = this.values.length - 1
        while(idx > 0) {
            let parentIndex = Math.floor((idx - 1) / 2)
            if (this.values[parentIndex].priority > newNode.priority) {
                return this
            }
            const temp = this.values[parentIndex]
            this.values[parentIndex] = newNode
            this.values[idx] = temp
            idx = parentIndex
        }
        return this
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            if (element.priority <= parent.priority) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    myDequeue() {
        const temp = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        this.values[this.values.length - 1] = temp
        this.values.pop()
        if (this.values.length > 0) {
            this.mySinkDown()
        }

        return temp
    }

    mySinkDown() {
        let idx = 0
        
        while(true) {
            let childLIdx = 2 * idx + 1
            let childRIdx = childLIdx + 1

            let childL = this.values[childLIdx]
            let childR = this.values[childRIdx]

            if(!childL && !childR) {
                break
            }

            let current = this.values[idx]
            const target = (typeof childR === 'undefined' || childL?.priority > childR?.priority) ? childL : childR
            const targetIndex = (typeof childR === 'undefined' || childL?.priority > childR?.priority) ? childLIdx : childRIdx
            if (target.priority <= current.priority) break
            this.values[targetIndex] = current
            this.values[idx] = target
            idx = targetIndex
        }
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max;
    }
    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && rightChild.priority > element.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }
            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element
            idx = swap
        }
    }
}

const priorityQueue = new PriorityQueue()

priorityQueue.myEnqueue('A', 1)
console.log(priorityQueue.values)
priorityQueue.myEnqueue('D', 4)
console.log(priorityQueue.values)
priorityQueue.myEnqueue('C', 3)
console.log(priorityQueue.values)
priorityQueue.myEnqueue('B', 2)
console.log(priorityQueue.values)

console.log(priorityQueue.myDequeue(), priorityQueue.values)
console.log(priorityQueue.myDequeue(), priorityQueue.values)
console.log(priorityQueue.myDequeue(), priorityQueue.values)
console.log(priorityQueue.myDequeue(), priorityQueue.values)
console.log(priorityQueue.myDequeue(), priorityQueue.values)

priorityQueue.enqueue('A', 1)
console.log(priorityQueue.values)
priorityQueue.enqueue('D', 4)
console.log(priorityQueue.values)
priorityQueue.enqueue('C', 3)
console.log(priorityQueue.values)
priorityQueue.enqueue('B', 2)
console.log(priorityQueue.values)

console.log(priorityQueue.dequeue(), priorityQueue.values)
console.log(priorityQueue.dequeue(), priorityQueue.values)
console.log(priorityQueue.dequeue(), priorityQueue.values)
console.log(priorityQueue.dequeue(), priorityQueue.values)
console.log(priorityQueue.dequeue(), priorityQueue.values)