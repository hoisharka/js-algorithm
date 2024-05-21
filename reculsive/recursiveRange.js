// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    if (num <= 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    let result = 1
    for(let i=2; i<=num; i++) {
       result += i
    }
    
    return result
}

// 솔루션
// function recursiveRange(x){
//     if (x === 0 ) return 0;
//     return x + recursiveRange(x-1);
// }

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 
