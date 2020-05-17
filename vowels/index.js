// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	//using RegExp
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;

/*
function vowels(str) {
	let count = 0;
	const vowelsArray = ["a", "e", "i", "o", "u"];
	for (let letter of str.toLowerCase()) {
		if (vowelsArray.includes(letter)) {
			count++;
		}
	}
	return count;
}
*/
