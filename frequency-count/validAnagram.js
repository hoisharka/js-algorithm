function validAnagram(str1, str2){
    console.log('validAnagram', str1, str2)
    // 두 문자열의 길이가 다르면 false
    if (str1.length !== str2.length) {
        return false
    }
    // str1 빈도수 체크 => frequencyCount1
    // str2 빈도수 체크 => frequencyCount2
    // frequencyCount1 loop. 각 char에 해당하는 빈도수가 frequencyCount2와 일치하는지 확인. 
    const frequencyCount1 = countFrequency(str1)
    const frequencyCount2 = countFrequency(str2)
    
    console.log('  - frequencyCount1', JSON.stringify(frequencyCount1))
    console.log('  - frequencyCount2', JSON.stringify(frequencyCount2))

    // 불일치 char 있는 경우 return false
    for (let key in frequencyCount1) {
        if (frequencyCount1[key] !== frequencyCount2[key]) {
            return false
        }
    }
    
    // 모든 frequencyCount1의 char 확인 후엔 return true
    return true
}

function countFrequency(str) {
    const result = {}
    for(let i=0; i<str.length; i++) {
        const char = str.charAt(i)
        result[`${char}`] = (result[`${char}`] || 0) + 1
    }
    return result
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true