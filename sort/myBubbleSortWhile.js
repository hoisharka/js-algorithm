// 사전 체크
// - arr.length < 2 이면 arr return
// 변수 세팅
// - sortedElementCount: 정렬된 항목 갯수. 가장 큰 항목부터 정렬 위치 확정됨. 
// 반복문
// 1) i: 비교 대상의 기준을 잡는 변수를 i로 둠. i = 0부터 시작. 
// 2) sortedElementCount가 arr.length - 1보다 작아야 반복문 실행
// 3) arr[i]와 arr[i+1] 비교, arr[i+1]이 더 작으면 위치를 바꾼다. 
//    i가 arr.length - (1 + sortedElementCount)일 때까지 반복. 
// 4) 3)내용 마치면 sortedElementCount 1증가 후 1)로 돌아가 다시 진행.

function myBubbleSortWhile(arr) {
    const _arr = [...arr]
    if (_arr.length <2) {
        return _arr
    }

    let sortedElementCount = 0
    let i = 0
    while(sortedElementCount < _arr.length - 1) {
        if (_arr[i + 1] < _arr[i]) {
            const temp = _arr[i]
            _arr[i] = _arr[i + 1]
            _arr[i + 1] = temp
        }


        if (i === _arr.length - 2) {
            sortedElementCount++
            i = 0
            continue
        }
        i++
    }   
    return _arr
}
console.log(myBubbleSortWhile([4,5,3,1,10,12,11]))