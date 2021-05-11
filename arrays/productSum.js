/* prompt: 
  Write a function that takes in a "special" array and returns its product sum.

  A "special" array is a non-empty array that contains either integers or other
  "special" arrays. The product sum of a "special" array is the sum of its
  elements, where "special" arrays inside it are summed themselves and then
  multiplied by their level of depth.

  The depth of a "special" array is how far nested it is. For instance, the
  depth of [] is 1; the depth of the inner array in
  [[]] is 2; the depth of the innermost array in
  [[[]]] is 3.

  Therefore, the product sum of [x, y] is x + y; the
  product sum of [x, [y, z]] is x + 2 * (y + z); the
  product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

*/

/* my pseudocode
    time: O(n), had to iterate through every element in the array (n-length of array)
    space: O(1), just used memory for variables
    initalize an empty variable productSum
    loop through all the items to get each element
        if the element is an array then recursively call it (array,depth+1)
        else the element is a number then add it to the productSum
    return productSum*depth
*/

function productSum(array, depth = 1) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += productSum(array[i], depth + 1);
		} else {
			sum += array[i];
		}
	}
	return sum * depth;
}

const testOneString = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
const testOne = productSum(testOneString) === 12;

const testTwoString = [1, 2, [3], 4, 5];
const testTwo = productSum(testTwoString) === 18;

const testThreeString = [[[[[5]]]]];
const testThree = productSum(testThreeString) === 600;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
