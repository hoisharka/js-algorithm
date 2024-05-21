function countUniqueValues(arr) {
    let i = 0;
    let count = arr.length
    while (i + 1 < arr.length - 1) {
        (arr[i] === arr[i + 1]) && count--;
        i++
    }
    return count
}



console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))