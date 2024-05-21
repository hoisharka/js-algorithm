function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1
        }
    }

    return true;
}

console.log(validAnagram('', '') === true ? 'pass' : 'fail') // true
console.log(validAnagram('aaz', 'zza') === false ? 'pass' : 'fail') // false
console.log(validAnagram('anagram', 'nagaram') === true ? 'pass' : 'fail') // true
console.log(validAnagram("rat","car") === false ? 'pass' : 'fail') // false
console.log(validAnagram('awesome', 'awesom') === false ? 'pass' : 'fail') // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') === false ? 'pass' : 'fail') // false
console.log(validAnagram('qwerty', 'qeywrt') === true ? 'pass' : 'fail') // true
console.log(validAnagram('texttwisttime', 'timetwisttext') === true ? 'pass' : 'fail') // true