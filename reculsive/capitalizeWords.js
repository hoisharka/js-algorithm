function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return []
    const [first, ...rest] = arr
    return [first.length === 0 ? '' : first.toLocaleUpperCase(), ...capitalizeWords(rest)]
}

// 솔루션
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;

}
console.log(capitalizeWords(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']
