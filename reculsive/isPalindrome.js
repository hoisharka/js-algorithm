// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return true
  if (str[0] !== str[str.length - 1]) return false
  if (str.length === 2) return true
  return isPalindrome(str.substring(1, str.length - 1))
}

//솔루션
// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   return false;
// }

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false