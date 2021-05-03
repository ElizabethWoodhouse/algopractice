/* prompt: 
  You're given a non-empty array of positive integers representing the amounts
  of time that specific queries take to execute. Only one query can be executed
  at a time, but the queries can be executed in any order.

  A query's waiting time is defined as the amount of time that it must
  wait before its execution starts. In other words, if a query is executed
  second, then its waiting time is the duration of the first query; if a query
  is executed third, then its waiting time is the sum of the durations of the
  first two queries.

  Write a function that returns the minimum amount of total waiting time for all
  of the queries. For example, if you're given the queries of durations
  [1, 4, 5], then the total waiting time if the queries were
  executed in the order of [5, 1, 4] would be
  (0) + (5) + (5 + 1) = 11. The first query of duration
  5 would be executed immediately, so its waiting time would be
  0, the second query of duration 1 would have to wait
  5 seconds (the duration of the first query) to be executed, and
  the last query would have to wait the duration of the first two queries before
  being executed.
*/

/* my pseudocode
    input: non-empty array of positive int (amount of time that specific queries take to execute)
    output: return min amount of total waiting time for all queries
    query waiting time: amount of time that it must wait before execution
    how: 
        sort array from lowest to largest
        initialize a variable named 'min' that holds the min sum and a variable named 'currentValue' that holds the sum of duration of previous queries
        iterate through the array to grab previous element to add to the min/currentValue
          ensure we don't do this for the 0 index (no previous value)
        return min amount of total waiting time 
    time: O(n), due to iterating through each element in the query & the sort method (sort method, know this will have diff time based on where it's run)
    space: O(n), resaved all elements in queries array once sorted
*/

/* example: 
input: [3, 2, 1, 2, 6]
sort: [1,2,2,3,6]
  //each iteration
    //0 index 0 element: 1
    //1 index 1 element: 2
    //1+2=3 index 2 element: 2
    //1+2+2=5 index 3 element 3
    //1+2+2+3=8 index 4 element 6
    //sum: 0+1+3+5+8=17
output: 17
*/

function minimumWaitingTime(queries) {
	let min = 0;
	let currentValue = 0;
	queries = queries.sort((a, b) => {
		return a - b;
	});
	for (let i = 0; i < queries.length; i++) {
		if (i !== 0) {
			currentValue += queries[i - 1];
			min += currentValue;
		}
	}
	return min;
}

//test
const testOneQuery = [3, 2, 1, 2, 6];
const testOne = minimumWaitingTime(testOneQuery) === 17;

const testTwoQuery = [2, 1, 1, 1];
const testTwo = minimumWaitingTime(testTwoQuery) === 6;

const testThreeQuery = [7];
const testThree = minimumWaitingTime(testThreeQuery) === 0;

console.log(testOne);
console.log(testTwo);
console.log(testThree);
