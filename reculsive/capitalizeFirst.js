function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return []
    const [first, ...rest] = arr
    return [first.length === 0 ? '' : (first[0].toLocaleUpperCase() + first.slice(1)), ...capitalizeFirst(rest)]
}

// 솔루션
// function capitalizeFirst(array) {
//     if (array.length === 1) {
//         return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
//     res.push(string);
//     return res;
// }

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']
