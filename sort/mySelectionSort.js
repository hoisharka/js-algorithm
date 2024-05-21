function mySelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 인덱스가 다를 경우에만 swap하여 계산을 줄인다. 
        if (i !== minIndex) {
            swap(arr, minIndex, i)
        }        
    }
    return arr
}

function swap(arr, index1, index2) {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

console.log(mySelectionSort([5, 3, 4, 1, 2]))

