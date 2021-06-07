import { testEqual } from '../test.js';
/* prompt:
  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.
  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.
*/

/* my pseudocode
    input: array of integers, integer to move to back of array
    output: mutated array
    time: O(n) 
    space: O(1)
    how: 
    initiate a left at the beg & right pointer at the end
    while the left pointer is less than the right pointer
        if the left num equals the num to move
            swap the leftNum with the rightNum
            decrement the rightPointer back one
        else increment the left pointr by one
    return the mutatedArray
*/

function moveElementToEnd(array, toMove) {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	while (leftPointer < rightPointer) {
		let leftNum = array[leftPointer];
		let rightNum = array[rightPointer];
		if (leftNum === toMove) {
			//swap these two
			array[leftPointer] = rightNum;
			array[rightPointer] = leftNum;
			rightPointer--;
		} else {
			leftPointer++;
		}
	}
	return array;
}

const testOne = testEqual(
	moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2),
	[4, 1, 3, 2, 2, 2, 2, 2]
);

const testTwo = testEqual(
	moveElementToEnd([1, 2, 4, 5, 3], 3),
	[1, 2, 4, 5, 3]
);

const testThree = testEqual(
	moveElementToEnd([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5], 5),
	[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]
);

console.log(testOne);
console.log(testTwo);
console.log(testThree);
