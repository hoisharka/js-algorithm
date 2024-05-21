// arr은 오름차순 정렬되어있음
// 첫번째 요소가 가장 작고 마지막 요소가 가장 큼
// 첫번째 요소를 left로 마지막 요소를 right로 지정
// left + right가 양수일 때 => right가 합을 0으로 만들기엔 큰 숫자이므로 left와 더해서 0이될 숫자가 존재한다면 right보다 왼쪽에 위치해야함.
// left + right가 음수일 때 => 합이 0이 되려면 left기준으로 더 큰 숫자가 필요하지만 right가 배열에서 가장 큼. 
// 현재 left로는 답을 구할 수 없기 때문에 left를 현 left의 오른쪽것으로 바꾸고 다시 시도.

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))