// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(index){
    // add whatever parameters you deem necessary - good luck!  
    if (index <= 2) return 1
    return fib(index - 2) + fib(index - 1)
  }
  
  console.log(fib(4)) // 3
  console.log(fib(10)) // 55
  console.log(fib(28)) // 317811
  console.log(fib(35)) // 9227465