function myBubbleSortWhile(arr) {
    const _arr = [...arr]

    if (_arr.length < 2) {
        return _arr
    }

    for (let i=0; i<_arr.length - 2; i++) {
        for (let j=0; j<_arr.length - (1 + i); j++) {
            if (_arr[j+1] < _arr[j]) {
                const temp = _arr[j]
                _arr[j] = _arr[j+1]
                _arr[j+1] = temp
            }
        }
    }

    return _arr
}

console.log(myBubbleSortWhile([4,5,3,1,10,12,11]))