// --- Directions
// Given a string, return length of the string
// ordering of numbers.
// --- Examples
//   countlen("") === 0
//   countlen("github") === 6
//   countlen("hello") === 5

function countlen(str) {
	let cnt = 0;

	while (str[cnt] != undefined) cnt++;

	return parseInt(cnt);
}

module.exports = countlen;
