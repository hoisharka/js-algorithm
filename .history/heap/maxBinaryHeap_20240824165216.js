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

const swap = () => {

}