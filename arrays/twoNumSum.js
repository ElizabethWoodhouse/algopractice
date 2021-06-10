import { testEqual } from '../test.js';
/* prompt:
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
*/

/* my pseudocode
    input: an array & a target sum
    output: an array of two numbers that add up to the target OR empty array if none
        time: O (n) linear time, n is the length of the array
        space: O(1) constant space
        how: 
        use a loop to access each number, breaks out of loop when firstPointer greater than array.length
            first pointer that stays at one num
                second pointer that loops through rest of the num
            if firstNum & secondNum === targetSum
                return sumArray
            when secondPointer equals array length
                increments one to the first pointer
                reset the second pointer
		return empty Array
*/

function twoNumberSum(array, targetSum) {
	let firstPointer = 0;
	let secondPointer = 1;
	while (firstPointer <= array.length) {
		const firstNum = array[firstPointer];
		const secondNum = array[secondPointer];
		if (firstNum + secondNum === targetSum) {
			return [firstNum, secondNum];
		}
		secondPointer++;
		//brings the second pointer back and increments the firstPointer up one
		if (secondPointer > array.length) {
			firstPointer++;
			secondPointer = firstPointer + 1;
		}
	}
	return [];
}

const testOneArray = [3, 5, -4, 8, 11, 1, -1, 6];
const testOne = testEqual(twoNumberSum(testOneArray, 10), [11, -1]);

const testTwoArray = [-7, -5, -3, -1, 0, 1, 3, 5, 7];
const testTwo = testEqual(twoNumberSum(testTwoArray, -5), [-5, 0]);

const testThreeArray = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
const testThree = testEqual(twoNumberSum(testThreeArray, 164), []);

console.log(testOne);
console.log(testTwo);
console.log(testThree);
