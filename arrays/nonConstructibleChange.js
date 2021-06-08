/* prompt:
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.
*/

/* my pseudocode
    input: array of positive integers, values of coins in your possession
    output: min amount of change you CAN'T create
    time: O(N*(log(N)) due to using the sort method
    space: O(1)
    how: 
    sort the coins from least to greatest
    loop through the coins array
        if you can't create the coins between minChange and the current Coin return the minChange+1
        else add current coin to the minchange
    once you've looped through all the min change this means you can create all the between "change". So return minchange +1 because you can't create change greater than the sum of the change
*/

function nonConstructibleChange(coins) {
	let minChange = 0;
	coins = coins.sort((a, b) => a - b);

	for (let i = 0; i < coins.length; i++) {
		let currentCoin = coins[i];
		if (currentCoin > minChange + 1) {
			return minChange + 1;
			//can't create the coins between minChange & currentCoin
		} else {
			minChange += currentCoin;
			//able to create all the values of change that you can currently create
			//value of coins that you just considered
		}
	}
	return minChange + 1;
}

const testOne = nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]) === 20;

const testTwo = nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]) === 3;

const testThree = nonConstructibleChange([1, 1]) === 3;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
