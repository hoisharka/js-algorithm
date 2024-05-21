//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    let result = 1
    for(let i=num;i>1;i--) {
       result *= i;
    }
    return result;
}

// 솔루션
// function factorial(x){
//     if (x < 0 ) return 0;
//     if (x <= 1 ) return 1;
//     return x * factorial(x-1);
//  }

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040