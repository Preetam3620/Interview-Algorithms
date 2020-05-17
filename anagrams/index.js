function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

/* 
function anagrams(stringA, stringB) {
	const charMapA = buildCharMap(stringA);
	const charMapB = buildCharMap(stringB);
	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
	for (let char in charMapA) {
		if (charMapA[char] !== charMapB[char]) {
			return false;
		}
	}
	return true;
}

function buildCharMap(str) {
	const charMap = {};
	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}
*/
