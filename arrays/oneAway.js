/* prompt:
There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character.
Given two strings, write a function to check if they are one edit (or zero edits) away
 */

/* my pseudocode
	input: two strings
	output: boolean, if strings are one/zero edits away from each other
	check if length of string1 & stringTwo are same length or one letter away from each other
		if not, return false because it would take more than 1 edit to update
	Have the first word be the longer string, second word be the shorter string
	count all the letters in the first word and keep it in an obj
	create a edited flag that flags if ONE edit has been made
	iterate through the second word, if the letter is in the obj decrement/delete
		if it is not in the object, update the edited flag to true, because one edit has been made
		if there is a second letter that is found that needs to be edit and there already has been a edit made return false
	check if there are any letters in the object, if not return true
	if there is less than one letter in the object & there have been no edits made that's the edit. So return true.
	Otherwise return false cause there's more than 1 edit needed
 */

/* example: 
“Tact Coa” => “true”
*/

//todo: update pseudocode, update tests, commit

function countLetters(string) {
	let count = {};
	for (const letter of string) {
		if (count[letter] > 0) {
			count[letter]++;
		} else {
			count[letter] = 1;
		}
	}
	return count;
}

function oneAway(stringOne, stringTwo) {
	debugger;
	let oneLength = stringOne.length;
	let twoLength = stringTwo.length;
	if (oneLength !== twoLength && Math.abs(oneLength - twoLength) > 1) {
		return false;
	}
	let firstWord = oneLength > twoLength ? stringOne : stringTwo;
	let secondWord = oneLength <= twoLength ? stringOne : stringTwo;
	let wordCount = countLetters(firstWord);
	let edited = false;
	for (const letter of secondWord) {
		if (wordCount[letter] > 1) {
			wordCount[letter]--;
		} else if (wordCount[letter] === 1) {
			delete wordCount[letter];
		} else if (edited) {
			return false;
		} else {
			edited = true;
		}
	}
	if (Object.keys(wordCount).length>1 && edited) {
		return false;
	}
	return true;
}

//test
const testOne = oneAway('pale', 'ple') === true;
const testTwo = oneAway('pear', 'dear') === true;
const testThree = oneAway('later', 'skater') === false;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
