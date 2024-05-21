function myNaiveString(longString, shortString) {
    let longIndex = 0; shortIndex = 0, count = 0;
    while (longIndex <= longString.length - shortString.length) {
        console.log(longIndex, longString[longIndex+shortIndex], shortString[shortIndex])
        if (longString[longIndex+shortIndex] !== shortString[shortIndex]) {
            longIndex++
            shortIndex = 0
            continue;
        }

        if (shortIndex === shortString.length - 1) {
            count++
            longIndex++
            shortIndex = 0
            continue;
        }
        shortIndex++
    }
    return count
}

console.log(myNaiveString('sdfsafsdabcdfsdabcf', 'abc'))