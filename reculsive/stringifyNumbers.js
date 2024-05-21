function stringifyNumbers(obj) {
    let newObj = {}
    console.log('stringifyNumbers', JSON.stringify(obj))

    if (Array.isArray(obj)) {
        newObj = obj.map(element => {
            if (typeof element === 'number') {
                return element.toString()
            }
            if (typeof element === 'object') {
                return stringifyNumbers(element)
            }
            return element
        })
    } else
        if (typeof obj === 'object') {
            for (let key in obj) {
                if (typeof obj[key] === 'number') {
                    newObj[key] = obj[key].toString()
                } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    newObj[key] = stringifyNumbers(obj[key])
                } else {
                    newObj[key] = obj[key]
                }
            }
        }
    return newObj
}

// 솔루션
// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))

