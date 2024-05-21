function myInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let targetIndex = 0
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                targetIndex = j + 1
                break;
            }
        }
        
        const temp = arr[i]
        for (let k = i; k > targetIndex; k--) {
            arr[k] = arr[k - 1]
        }
        arr[targetIndex] = temp
        console.log(i, targetIndex, arr)
    }
}


console.log(myInsertionSort([2, 1, 9, 76, 4]))