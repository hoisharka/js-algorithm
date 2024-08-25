class MaxBinaryHeap {
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
}

const heap = new MaxBinaryHeap()
// heap.myInsert(44)
// heap.myInsert(70)
// heap.myInsert(45)
// heap.myInsert(65)
// heap.myInsert(40)
// heap.myInsert(53)
// heap.myInsert(99)
// heap.myInsert(100)
console.log(heap.values)
console.log(heap.myExtractMax())
console.log(heap.values)
console.log(heap.myExtractMax())
console.log(heap.values)