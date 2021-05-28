/* prompt: 

  A tandem bicycle is a bicycle that's operated by two people: person A and
  person B. Both people pedal the bicycle, but the person that pedals faster
  dictates the speed of the bicycle. So if person A pedals at a speed of
  5, and person B pedals at a speed of 4, the tandem bicycle moves at a speed of 5 
  (i.e.,tandemSpeed = max(speedA, speedB)).

  You're given two lists of positive integers: one that contains the speeds of
  riders wearing red shirts and one that contains the speeds of riders wearing
  blue shirts. Each rider is represented by a single positive integer, which is
  the speed that they pedal a tandem bicycle at. Both lists have the same
  length, meaning that there are as many red-shirt riders as there are
  blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a
  rider wearing a blue shirt to operate a tandem bicycle.

  Write a function that returns the maximum possible total speed or the minimum
  possible total speed of all of the tandem bicycles being ridden based on an
  input parameter, fastest. If fastest = true, your
  function should return the maximum possible total speed; otherwise it should
  return the minimum total speed.

  "Total speed" is defined as the sum of the speeds of all the tandem bicycles
  being ridden. For example, if there are 4 riders (2 red-shirt riders and 2
  blue-shirt riders) who have speeds of 1, 3, 4, 5, and if they're
  paired on tandem bicycles as follows: [1, 4], [5, 3], then the
  total speed of these tandem bicycles is 4 + 5 = 9.

*/

/* my pseudocode
    input: redShirtSpeed, blueShirtSpeed, fastOrSlow
    output: total speed
    imp info: if one person pedals faster it dictates the speed of the bike
              if fastest is true, return max speed if false return min speed

//sort the red shirt from least to greatest
//sort blue shirt from greatest to least
    how: 
        sort red shirt from least to greatest
        if fastest is true, sort blue from greatest to least(max values will face min values), false least to greatest (max values will face each other)
        initiate a variable to keep track of the total speed
        loop through the red shirt to grab each element of both the red & blue.
            come up with the speed based on which speed is better between red & blue
            add this speed to the total speed
        return the total speed
    time: O(n), due to iterating through each element in the array, n is equal to the length of redshirts (since blue/red are the same length)
    space: O(1), used constant space to save sum and speeds
*/

/* example: 
input: redShirtSpeed: [1, 2, 1, 9, 12, 3], blueShirtSpeed: [3, 3, 4, 6, 1, 2], fasest: true
sort both red & blue shirts: redShirtSpeed: [1,1,2,3,9,12] blueShirtSpeed: [6,4,3,3,2,1](sorted greatest->least because fastest is true)
  //iterate through red/blue
    //index 0 redShirt:1 blueShirt:6 speed: 6 speedSum=6
    //index 1 redShirt:1 blueShirt:4 speed: 4 speedSum=6+4
    //index 2 redShirt:2 blueShirt:3 speed: 3 speedSum=6+4+3
    //index 3 redShirt:3 blueShirt:3 speed: 3 speedSum=6+4+3+3
    //index 4 redShirt:9 blueShirt:2 speed: 9 speedSum=6+4+3+3+9
    //index 5 redShirt:12 blueShirt:1 speed: 12 speedSum=6+4+3+3+9+12
output: speedSum = 37
*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b);
	if (fastest) {
		blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => b - a);
	} else {
		blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b);
	}
	let speedSum = 0;
	redShirtSpeeds.forEach((red, index) => {
		let blue = blueShirtSpeeds[index];
		speedSum += red > blue ? red : blue;
	});
	return speedSum;
}

//test
const testOneRedTeam = [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1];
const testOneBlueTeam = [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32];
const testOne = tandemBicycle(testOneRedTeam, testOneBlueTeam, true) === 816;

const testTwoRedTeam = [1];
const testTwoBlueTeam = [5];
const testTwo = tandemBicycle(testTwoRedTeam, testTwoBlueTeam, true) === 5;

const testThreeRedTeam = [1, 1, 1, 1, 2, 2, 2, 2, 9, 11];
const testThreeBlueTeam = [1, 1, 1, 1, 3, 3, 3, 3, 5, 7];
const testThree =
	tandemBicycle(testThreeRedTeam, testThreeBlueTeam, false) === 36;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
