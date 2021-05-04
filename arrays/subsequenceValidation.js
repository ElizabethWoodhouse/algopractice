/* prompt: 

*/

/* my pseudocode
    input: array, sequence(array)
    output: boolean (subsequence or not)
    subsequence: set of nums that aren't necessarily adjacent but are in the same order as they appear in the array
    how: 
        initialize a variable to keep track of the sequence idx (start at 0)
        loop through the array to get each number
            if array element equals sequence element move sequenceIdx up one
            if sequenceIdx equals sequence length - 1, that means we checked all sequence nums and exist in a subsequence in array, so return true
        return false once you've looped through all the array numbers and it's not a subsequence
    time: O(n), had to iterate through every element in the array (n-length of array)
    space: O(1), just used memory for variables
*/

/* example: 
input: array: [5,1,22,25,6,-1,8,10], sequence: [1,6,-1,10]
    loop through array:
        arrayNum: 5, sequenceNum: 1, sequenceIdx: 0
        arrayNum: 1, sequenceNum: 1, sequenceIdx: 0  ===> move sequenceIdx up 1
        arrayNum: 22, sequenceNum: 6, sequenceIdx: 1  
        arrayNum: 25, sequenceNum: 6, sequenceIdx: 1  
        arrayNum: 6, sequenceNum: 6, sequenceIdx: 1  ===> move sequenceIdx up 1
        arrayNum: -1, sequenceNum: -1, sequenceIdx: 2 ===> move sequenceIdx up 1
        arrayNum: 8, sequenceNum: 10, sequenceIdx: 3
        arrayNum: 10, sequenceNum: 10, sequenceIdx: 3 ===> move sequenceIdx up 1 ==> sequenceIdx equals sequence length so returns true (all sequence nums have been iterated through)
output: true
*/

function isValidSubsequence(array, sequence) {
	let sequenceIdx = 0;
	for (let i = 0; i < array.length; i++) {
		let arrayNum = array[i];
		let sequenceNum = sequence[sequenceIdx];
		if (arrayNum === sequenceNum) {
			sequenceIdx++;
		}
		if (sequenceIdx === sequence.length - 1) {
			return true;
		}
	}
	return false;
}

//test
const testOneArray = [5, 1, 22, 25, 6, -1, 8, 10];
const testOneSeq = [1, 6, -1, 10];
const testOne = isValidSubsequence(testOneArray, testOneSeq) === true;

const testTwoArray = [5, 1, 22, 25, 6, -1, 8, 10];
const testTwoSeq = [5, 1, 22, 25, 6, -1, 8, 10];

const testTwo = isValidSubsequence(testTwoArray, testTwoSeq) === true;

const testThreeArray = [5, 1, 22, 25, 6, -1, 8, 10];
const testThreeSeq = [1, 6, -1, -1, 10];
const testThree = isValidSubsequence(testThreeArray, testThreeSeq) === false;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
