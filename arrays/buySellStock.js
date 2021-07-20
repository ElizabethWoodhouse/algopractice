/* prompt:
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/

/* my pseudocode
    input: array of prices
    output: max profit you can achieve
    Brute Force:
    initialize a maxProfit variable, at first have it equal 0
    loop through the array to buyPrice
        loop through the array to get the sellPrice
            if sellPrice - buyPrice > maxProfit
    return maxProfit
    time: O(n^2)
    space: O(1)
    Optimized:
    initialize a maxProfit variable, at first have it equal 0
    initialize a buyPrice varaible, have it equal infinity
    loop through the array
        if currentNum is greater than buyPrice then update buyPrice
        else 
            check if currentNum-buyPrice > maxProfit, if so update maxProfit
    time: O(n)
    space: O(1)
*/

function buySellStock(array) {
    let maxProfit = 0;
    let buyPrice = Infinity;
	for (let i = 0; i < array.length; i++) {
        if (array[i] < buyPrice) {
            buyPrice = array[i];
        } else if (array[i] - buyPrice > maxProfit) {
            maxProfit = array[i] - buyPrice;
        }
	}
	return maxProfit;
}

const testOne = buySellStock([7, 1, 5, 3, 6, 4]) === 5;
const testTwo = buySellStock([7, 6, 4, 3, 1]) === 0;
const testThree = buySellStock([1,2]) === 1;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
