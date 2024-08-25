/**
 * 요소가 1개 또는 빈배열은 정렬된 상태라는 것을 이용.
 * 요소가 1개가 될 때까지 배열을 분할
 * 1개의 요소들로 분할된 것을 병합하면서 정렬
 * 이미 병합된 배열들끼리 반복해서 병합
 */

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
 
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return mergeArray(left, right)
}

function mergeArray(arr1, arr2) {
    const result = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result
}

console.log(mergeArray([3,4], [1,2]))
console.log(mergeSort([34, 3, 1, 3, 5, 6, 3, 33, 22, 5, 66]))