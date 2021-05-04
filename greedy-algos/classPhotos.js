/* prompt: 
  It's photo day at the local school, and you're the photographer assigned to
  take class photos. The class that you'll be photographing has an even number
  of students, and all these students are wearing red or blue shirts. In fact,
  exactly half of the class is wearing red shirts, and the other half is wearing
  blue shirts. You're responsible for arranging the students in two rows before
  taking the photo. 
  Each row should contain the same number of the students and
  should adhere to the following guidelines:
    -All students wearing red shirts must be in the same row.
    -All students wearing blue shirts must be in the same row.
    -Each student in the back row must be strictly taller than the student
    directly in front of them in the front row.
  You're given two input arrays: one containing the heights of all the students
  with red shirts and another one containing the heights of all the students
  with blue shirts. These arrays will always have the same length, and each
  height will be a positive integer. Write a function that returns whether or
  not a class photo that follows the stated guidelines can be taken.
  Note: you can assume that each class has at least 2 students.
*/

/* my pseudocode
    input: height of students w/ red shirts(array), heights of students w/ blue shirts (array)
    output: boolean(if class photo can be taken with the guidelines)
    task: arrage students in two rows
    student layout: even num of students, half red shirt, half blue shirt
    guidelines:
        all students wearing red shirts must be in the same row
        all students wearing blue shirts must be in same row
        each student in the backrow must be strictly taller than the student directly in front of them in the front row
    how: 
        sort both the arrays
        identify which shirt is the back row based on comparing the first indx (could be any element)
        initialize a idx
        iterate through both arrays with a while loop, loop ends when idx equals array length
            based on which is the backrow, check if backrow height is less than or equal to front row, if so return false
        once you break out of the loop that means all back row heights are greater than front row so return true
    time: O(n), due to iterating through every item in the array (n is the length of array)
    space: O(n), due to re-saving the arrays 
*/

/* example: 
input: redShirtHeights: [6,9,2,4,5,1], blueShirtHeights:[5,8,2,3,4,9]
sort: redShirtHeights:  [1,2,4,5,6,9], blueShirtHeights:[2,3,4,5,8,9]
backRow: check if first redShirtHeight > blueShirtHeight, it's not so blueshirt is back row
  //each iteration
    //index:0, redShirtHeight:1 blueShirtHeight:2
    //index:1, redShirtHeight:2 blueShirtHeight:3
    //index:2, redShirtHeight:4 blueShirtHeight:4 ==> automatically return false because they're equal
output: false
*/

function classPhotos(redShirtHeights, blueShirtHeights) {
	let backRow;
	let idx = 0;

	redShirtHeights = redShirtHeights.sort((a, b) => {
		return a - b;
	});
	blueShirtHeights = blueShirtHeights.sort((a, b) => {
		return a - b;
	});
	redShirtHeights[0] > blueShirtHeights[0]
		? (backRow = 'redShirt')
		: (backRow = 'blueShirt');

	while (idx < redShirtHeights.length) {
		if (backRow === 'redShirt') {
			if (redShirtHeights[idx] <= blueShirtHeights[idx]) {
				return false;
			}
		} else {
			if (redShirtHeights[idx] >= blueShirtHeights[idx]) {
				return false;
			}
		}
		idx++;
	}

	return true;
}

//test
const testOneArray = [6, 9, 2, 4, 5];
const testOneSeq = [5, 8, 1, 3, 4];
const testOne = classPhotos(testOneArray, testOneSeq) === true;

const testTwoArray = [19, 2, 4, 6, 2, 3, 1, 1, 4];
const testTwoSeq = [21, 5, 4, 4, 4, 4, 4, 4, 4];

const testTwo = classPhotos(testTwoArray, testTwoSeq) === false;

const testThreeArray = [1, 2, 3, 4, 5];
const testThreeSeq = [2, 3, 4, 5, 6];
const testThree = classPhotos(testThreeArray, testThreeSeq) === true;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
