class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = 0
    }
}
class PriorityQueue {
    constructor() {
        this.values = [70, 67, 65, 45, 58, 40, 53, 44, 15, 31]
    }

    myInsert(value){
        this.values.push(value)
        let childIndex = this.values.length - 1
        while(childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2)
            if (this.values[parentIndex] > value) {
                return this
            }
            const temp = this.values[parentIndex]
            this.values[parentIndex] = value
            this.values[childIndex] = temp
            childIndex = parentIndex
        }
        return this
    }

    insert(element) {
        this.values.push(element)
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
        this.mySinkDown()

        return temp
    }

    mySinkDown() {
        let idx = 0
        
        while(true) {
            let childLIdx = 2 * idx + 1
            let childRIdx = childLIdx + 1

            if(childLIdx >= this.values.length 
            || childRIdx >= this.values.length) {
                break
            }

            let childL = this.values[childLIdx]
            let childR = this.values[childRIdx]

            let current = this.values[idx]
            const target = childL > childR ? childL : childR
            const targetIndex = childL > childR ? childLIdx : childRIdx
                        
            if (target <= current) break
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

const heap = new PriorityQueue()