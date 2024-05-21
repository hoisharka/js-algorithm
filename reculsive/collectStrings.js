function collectStrings(obj) {
    let result = []
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key])
        }
        else if (typeof obj[key] === 'object') {
            result = result.concat(collectStrings(obj[key]))
        }
    }
    return result
}

// 솔루션 - helper function 버전
// function collectStrings(obj) {
//     var stringsArr = [];

//     function gatherStrings(o) {
//         for (var key in o) {
//             if (typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if (typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }

//     gatherStrings(obj);

//     return stringsArr;
// }
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])