/* prompt: 
    Given two strings, write a method to decide if one is a permutation of the other.
    Solution is under assumption input strings are all lowerCased & letters only
*/

/* my pseudocode
    input: 2 strings
    output: boolean, if one is a permuation of the other
    how: 
    check if 2 strings are same length, if not return false
    initialize an obj that keeps track of letters in first string
    iterate through firstString to get each letter
        if letter has been seen before add 1 to count in obj
        else create a new key/value pair for letter initializing key to letter & value to 1
    iterate through secondString to get each letter
        check if letter  is in obj, if not return false
        if yes, decrement count
    once loop is complete return true
    time: O(n) n amount of letters in string
    space: O(n) due to keeping track of letters in the obj
*/

/* example: 
"apple","ppale" => true
"pear" "dear"=> false
"cat" "tac"=> true
*/

function checkPerm(stringOne, stringTwo) {
	if (stringOne.length !== stringTwo.length) {
		return false;
	}
	let stringOneLetters = {};
	for (const letter of stringOne) {
		if (stringOneLetters[letter] > 0) {
			stringOneLetters[letter]++;
		} else {
			stringOneLetters[letter] = 1;
		}
	}
	for (const letter of stringTwo) {
		if (!stringOneLetters[letter] > 0) {
			return false;
		} else {
			stringOneLetters[letter]--;
		}
	}
	return true;
}

//test
const testOne = checkPerm('apple', 'ppale') === true;
const testTwo = checkPerm('pear', 'dear') === false;
const testThree = checkPerm('cat', 'tac') === true;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
