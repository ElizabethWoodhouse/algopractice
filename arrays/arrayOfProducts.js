/* prompt: 
  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of
  every number in the input array other than input[i].
  
  Note that you're expected to solve this problem without using division.
*/

/* my pseudocode
    input: array of integers
    output: array equal to product of every other num in input array
    Brute-force method:
        time: O(n²)
        space: O(n), length of input array
        how: create an nested for loop to access two elements
                if the element in the innerLoop is not equal to the element from the outerLoop multiply it into the product
                once the innerLoop is finished push the product into the array with the products
            return the array with the products
    Optimized:
        time: O(n), length of input array
        space: O(n)
        how: initalize the pointers for currentNum & otherNum
            create a while loop that breaks when the currentNumPointer is greater than the array length
                if the currentNumPointer is not equal to the otherNumPointer multiply the otherNum by the product
                if the otherNumPointer reaches the end of the array
                    push the product to the array of products, refresh the product variable & currentNumPointer and increment the currentNumPointer
                after every iteration increment the otherNumPointer to get it to go forward
            return the array with the products
*/

//brute-force method
function arrayOfProducts(array) {
	let productArray = [];
	for (let i = 0; i < array.length; i++) {
		let product = 1;
		for (let j = 0; j < array.length; j++) {
			if (i !== j) {
				product *= array[j];
			}
		}
		productArray.push(product);
	}
	return productArray;
}

//optimized solution
function optimizedArrayOfProducts(array) {
	let productArray = [];
	let currentNumPointer = 0;
	let otherNumPointer = 0;
	let product = 1;
	while (currentNumPointer < array.length) {
		if (currentNumPointer !== otherNumPointer) {
			product *= array[otherNumPointer];
		}
		if (otherNumPointer === array.length - 1) {
			//push and re-set the pointers
			productArray.push(product);
			product = 1;
			otherNumPointer = -1;
			currentNumPointer++;
		}
		otherNumPointer++;
	}
	return productArray;
}

//optimized solution
function testEqual(testArray, outputArray) {
	if (testArray.length !== outputArray.length) {
		return false;
	}
	for (let i = 0; i < testArray.length; i++) {
		if (testArray[i] !== outputArray[i]) {
			return false;
		}
	}
	return true;
}

const testOneArray = [5, 1, 4, 2];
const testOne = testEqual(arrayOfProducts(testOneArray), [8, 40, 10, 20]);
const testOneOptimized = testEqual(
	optimizedArrayOfProducts(testOneArray),
	[8, 40, 10, 20]
);

const testTwoArray = [1, 8, 6, 2, 4];
const testTwo = testEqual(
	arrayOfProducts(testTwoArray),
	[384, 48, 64, 192, 96]
);
const testTwoOptimized = testEqual(
	optimizedArrayOfProducts(testTwoArray),
	[384, 48, 64, 192, 96]
);

const testThreeArray = [9, 3, 2, 1, 9, 5, 3, 2];

const testThree = testEqual(
	arrayOfProducts(testThreeArray),
	[1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290]
);
const testThreeOptimized = testEqual(
	optimizedArrayOfProducts(testThreeArray),
	[1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290]
);

console.log(testOne);
console.log(testTwo);
console.log(testThree);

console.log(testOneOptimized);
console.log(testTwoOptimized);
console.log(testThreeOptimized);
