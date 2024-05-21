function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null
    }

    let max = -Infinity;
    for(let i=0; i<arr.length - num + 1; i++) {
        let sum = 0
        for (let j=i; j<i+num; j++) {
            sum += arr[j]
        }
        if (max < sum) {
            max = sum
        }
    }
    return max 
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))