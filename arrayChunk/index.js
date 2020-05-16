// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = [];
	for (let index = 0; index < array.length; index += size)
		chunked.push(array.slice(index, index + size));
	return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
// 	const chunked = [];
// 	for (let element of array) {
// 		const last = chunked[chunked.length - 1];
// 		!last || last.length === size ? chunked.push([element]) : last.push(element);
// 	}
// 	return chunked;
// }
