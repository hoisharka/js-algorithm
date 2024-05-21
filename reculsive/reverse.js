function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return str
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

// 솔루션
// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'