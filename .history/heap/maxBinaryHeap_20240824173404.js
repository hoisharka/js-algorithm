class MaxBinaryHeap {
    constructor() {
        this.values = []
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
        mySinkDown()

        return temp
    }

    mySinkDown() {
        let idx = 0
        let childIdx = 1
        while(true) {
            let childIdx = 2 * idx + 1
            let child = this.values[childIdx]
            if (typeof child === 'undefined') break
            let current = this.values[idx]
            if (child <= current) break
            this.values[childIdx] = current
            this.values[idx] = child
            idx = childIdx
        }
    }
}

const heap = new MaxBinaryHeap()
heap.myInsert(44)
heap.myInsert(70)
heap.myInsert(45)
heap.myInsert(65)
heap.myInsert(40)
heap.myInsert(53)
heap.myInsert(99)
heap.myInsert(100)
console.log(heap.value)