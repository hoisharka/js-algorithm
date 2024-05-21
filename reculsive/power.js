// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 반복문 사용
function power(num1, num2){
    let result = 1;
    for (let i=0;i<num2;i++) {
        result *= num1;
    }
    return result;
}
// 재귀 사용. 테스트 실행시 stack overflow 발생. exponent가 0이면 문제.
// function power(base, exponent){
//     if(exponent === 1) return base
//     return base * power(base, exponent - 1)
// }

// 솔루션
// function power(base, exponent){
//     if(exponent === 0) return 1;
//     return base * power(base,exponent-1);
// }

console.log(power(2,3))
console.log(power(2,4))