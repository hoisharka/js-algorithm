function myBinarySearch(arr, value) {
    let lp = 0
    let rp = arr.length - 1
    while (lp < rp) {
        const middle = lp + Math.ceil((rp - lp) / 2)
        // console.log(lp, middle, rp)
        if (value === arr[middle]) {
            return middle
        }
        if (value < arr[middle]) {
            rp = middle
        }
        else {
            lp = middle
        }
    }
    return -1
}

const stop = (ms) => {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

console.log(myBinarySearch([1,2,3,4,5],2)) // 1
console.log(myBinarySearch([1,2,3,4,5],3)) // 2
console.log(myBinarySearch([1,2,3,4,5],5)) // 4
console.log(myBinarySearch([1,2,3,4,5],6)) // -1
console.log(myBinarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(myBinarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(myBinarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1



