// --- Directions
// Write a function that accepts a positive number N.
// The function should  console log consecutive
// natural numbers starting from 0 to N. Make sure
// the function is implemented using recursion.
// --- Examples
// recursion(5) --> '1', '2', '3', '4', '5'
// recursion(10) --> '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'

function recursion(n) {
	if (n === 0) {
		return;
	}
	recursion(n - 1);
	console.log(n);
}

module.exports = recursion;
