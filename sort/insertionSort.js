/**
 * 비교 기준 index i. 1 ~ arr.length-1 까지 순서대로 대상 선정.
 * arr[i]의 값은 currentValue 변수에 담기.
 * currentValue의 위치부터 왼쪽으로 하나씩 비교. 
 *   - currentValue보다 큰 값을 만나면 비교대상의 위치 오른쪽으로 한칸 이동. 
 *     currentValue의 삽입 위치 확보를 위함.
 *   - currentValue보다 큰 값이 아니면 loop 벗어남.
 *   - 마지막 비교대상 위치 오른쪽에 currentValue 삽입.
 *   
 * @param {*} arr 
 * @returns 
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]))