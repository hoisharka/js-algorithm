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

    myInsert(val, priority){
        const newNode = newNode(val, priority)
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

    insert(val, priority) {
        const newNode = newNode(val, priority)
        this.values.push(newNode)
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    myExtractMax() {
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

    extractMax() {
        const max = tis.values[0];
        const end = this.values.pop();
        if(this.values > 0) {
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
            if (leftChildIndx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIndx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

priorityQueue.myInsert(new Node('A', 1))
console.log(priorityQueue.values)
priorityQueue.myInsert(new Node('D', 4))
console.log(priorityQueue.values)
priorityQueue.myInsert(new Node('C', 3))
console.log(priorityQueue.values)
priorityQueue.myInsert(new Node('B', 2))
console.log(priorityQueue.values)

console.log(priorityQueue.myExtractMax(), priorityQueue.values)
console.log(priorityQueue.myExtractMax(), priorityQueue.values)
console.log(priorityQueue.myExtractMax(), priorityQueue.values)
console.log(priorityQueue.myExtractMax(), priorityQueue.values)
console.log(priorityQueue.myExtractMax(), priorityQueue.values)

