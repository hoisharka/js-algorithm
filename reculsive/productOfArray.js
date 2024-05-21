// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(argument) {
    let result = 1
    for(let i=0; i<argument.length; i++) {
        result *= argument[i]
    }
    
    return result
}

// 솔루션
// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

console.log(productOfArray([1,2,3,10])) // 60
console.log(productOfArray([1,2,3])) // 6