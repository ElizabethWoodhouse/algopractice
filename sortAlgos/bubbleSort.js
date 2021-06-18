import { testEqual } from '../test.js';
/* prompt:
Write a function that takes in an array of integers and returns a sorted version of that array.
Use bubble sort to sort the array
*/

/* my pseudocode
    input: array
    output: sortedArray
    task: use bubbleSort to sort
    how: 
        initalize a flag to say if array is sorted
        initalize a counter
        while the array is not sorted
        flip sorted flag to true to assume array is sorted
        iterate through all the items in the array and compare if each item is in a sorted order
        if not swap their order and change the sorted flag to false
        counting sorting and adding the sorted elements to the back of the array until you finially have a sorted array
    time: O(n^2)
    space: O(1)
*/

function bubbleSort(array) {
	let counter = 0;
	let isSorted = false;
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < array.length - 1 - counter; i++) {
			let firstNum = array[i];
			let secondNum = array[i + 1];
			if (firstNum > secondNum) {
				array[i] = secondNum;
				array[i + 1] = firstNum;
				isSorted = false;
			}
		}
		counter++;
	}
	return array;
}

const testOneArray = [8, 5, 2, 9, 5, 6, 3];
const testOne = testEqual(bubbleSort(testOneArray), [2, 3, 5, 5, 6, 8, 9]);

const testTwoArray = [
	-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8,
];
const testTwo = testEqual(
	bubbleSort(testTwoArray),
	[-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
);

const testThreeArray = [
	2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4,
	4, 8, 5, 1, 5, 0, 0, 2, -10,
];
const testThree = testEqual(
	bubbleSort(testThreeArray),
	[
		-10, -10, -9, -9, -9, -8, -8, -6, -4, -4, -4, -2, -1, 0, 0, 0, 0, 1, 1, 2,
		2, 4, 4, 5, 5, 7, 8, 8, 9, 10,
	]
);

console.log(testOne);
console.log(testTwo);
console.log(testThree);
