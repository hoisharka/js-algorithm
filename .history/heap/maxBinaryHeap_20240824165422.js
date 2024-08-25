class MaxBinaryHeap {
    constructor() {
        this.value = []
    }

    myInsert(value){
        this.value.push(value)
        let childIndex = this.value.length - 1
        while(childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2)
            if (this.value[parentIndex] > value) {
                return this
            }
            const temp = this.value[parentIndex]
            this.value[parentIndex] = value
            this.value[childIndex] = temp
            childIndex = parentIndex
        }
        return this
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