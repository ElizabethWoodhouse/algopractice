import { testEqual } from './util/testEqualß';
/* prompt:
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.
  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.
  You can assume that there will only be one pair of numbers with the smallest
  difference.
*/

/* my pseudocode
    input: two non-empty array of integers
    output: returns array containing the pair of nums
    whose absolute diff is closest to zero (first array num in first)
    how: 
    for loop with arrayOne
	for loop with arrayTwo
		loop through each num and find the absolute diff between the two nums
				if absolute diff is less than currentAbsolute diff
				update absolute diff & array of nums
    time: O(n²)
    space: constant O(1)
*/

function smallestDifference(arrayOne, arrayTwo) {
	let absoluteDiff = Infinity;
	let pair = [];
	for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			let numOne = arrayOne[i];
			let numTwo = arrayTwo[j];
			let distance = Math.abs(numOne - numTwo);
			if (distance < absoluteDiff) {
				absoluteDiff = distance;
				pair = [numOne, numTwo];
			}
		}
	}
	return pair;
}

//test
const testOneArray = [-1, 5, 10, 20, 28, 3];
const testOneSeq = [26, 134, 135, 15, 17];
const testOne = testEqual(
	smallestDifference(testOneArray, testOneSeq),
	[28, 26]
);

const testTwoArray = [10, 0, 20, 25];
const testTwoSeq = [1005, 1006, 1014, 1032, 1031];

const testTwo = testEqual(
	smallestDifference(testTwoArray, testTwoSeq),
	[25, 1005]
);

console.log(testOne);
console.log(testTwo);
