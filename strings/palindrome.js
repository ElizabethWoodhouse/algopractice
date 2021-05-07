/* prompt: 
  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindrome.
  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.
*/

/* my pseudocode
    input: nonempty string
    output: boolean (string is a palindrome)
    palindrome: string written the same forwards and backward
    how: 
    while left pointer is not greater than right pointer
      if the left letter doesn't equal right letter => return false
      otherwise increment left, decrement right
    return true (means that left/right letters are same, checked in the while loop)
    time: O(n), iterating through all the letters (n is the length of input string)
    space: O(1) constant N, not that many variables
*/

/* example: 
//example string: "abcdcba"
output: true
*/

function isPalindrome(string) {
	let leftPointer = 0;
	let rightPointer = string.length - 1;
	while (leftPointer < rightPointer) {
		let firstLetter = string[leftPointer];
		let secondLetter = string[rightPointer];
		if (firstLetter !== secondLetter) {
			return false;
		}
		leftPointer++;
		rightPointer--;
	}
	return true;
}

//test
const testOneString = 'a';
const testOne = isPalindrome(testOneString) === true;

const testTwoString = 'abcdefghhgfedcba';
const testTwo = isPalindrome(testTwoString) === true;

const testThreeString = 'abcdefghihgfeddcba';
const testThree = isPalindrome(testThreeString) === false;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
