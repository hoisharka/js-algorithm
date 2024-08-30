function mergeSort(arr) {
	console.log('mergeSort', arr)
	if (arr.length < 2) {
		return arr
	}
	const mid = Math.floor(arr.length / 2)
	const left = arr.slice(0, mid)
	const right = arr.slice(mid, arr.length)
	
	return mergeArray(
		mergeSort(left),
		mergeSort(right)
	)
}

function mergeArray(arr1, arr2) {
	console.log('-- mergeArray', arr1, arr2)
	let i = 0, j = 0
	const result = []
	while(i < arr1.length && j <arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i])
			i++;
		} else {
			result.push(arr2[j])
			j++
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i])
		i++;
	}

	while (j < arr2.length) {
		result.push(arr2[j])
		j++;
	}
	return result 
}

const arr = [34, 3, 1, 3, 5, 6, 3, 33, 22, 5, 66]
console.log(mergeSort(arr))