function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null
    }

    let sum = 0
    for (let i = 0; i<num; i++) {
        sum += arr[i]
    }

    let max = sum
    for (let i = 1; i<arr.length - num + 1; i++) {
        sum = sum - arr[i - 1] + arr[i+num-1]
        if (max < sum) {
            max = sum
        }
    }

    return max
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))
console.log(maxSubarraySum([2,6,9], 3))