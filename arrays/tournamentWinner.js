/* prompt:
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions and results, respectively. The competitions array has elements in the form of
  [homeTeam, awayTeam], where each team is a string of at most 30
  characters representing the name of the team. The results array
  contains information about the winner of each corresponding competition in the
  competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the
  results array means that the home team in the corresponding
  competition won and a 0 means that the away team won.

  It's guaranteed that exactly one team will win the tournament and that each
  team will compete against all other teams exactly once. It's also guaranteed
  that the tournament will always have at least two teams.
*/

/* my pseudocode
    input: array of paris teams that have to compete against each other & array or results
    output: winner
    rules: 
        one Home and one away
        always one winner and one loser
        3 points win, 0 points lose
        winner has most amount of points
    time: O(n)
    space: O(n)
    how: 
        initialize a scoring obj
        initialize a game variable, highestScore, winningTeam
        iterate through array until # of games is equal to the results array
            deterimine the winner
                if the winner is not in the scoring index, add it
                if the winner is in the scoring index, add +3 to the score
            check if the winner's score is greater than the current lead
                if so update the current lead to be the winner
            increment the amount of games played & use this as the pointer
    return the winning team
*/

function tournamentWinner(competitions, results) {
	let scoring = {};
	let game = 0;
	let highestScore = 0;
	let winningTeam = 0;
	while (game !== results.length) {
		let result = results[game];
		let match = competitions[game];
		let winnerIdx = 0;
		result === 1 ? (winnerIdx = 0) : (winnerIdx = 1);
		if (scoring[match[winnerIdx]] === undefined) {
			scoring[match[winnerIdx]] = 3;
		} else {
			scoring[match[winnerIdx]] = scoring[match[winnerIdx]] + 3;
		}
		if (scoring[match[winnerIdx]] > highestScore) {
			highestScore = scoring[match[winnerIdx]];
			winningTeam = match[winnerIdx];
		}
		game++;
	}
	return winningTeam;
}

const testOne =
	tournamentWinner(
		[
			['HTML', 'C#'],
			['C#', 'Python'],
			['Python', 'HTML'],
		],
		[0, 0, 1]
	) === 'Python';

const testTwo = tournamentWinner([['Bulls', 'Eagles']], [1]) === 'Bulls';

const testThree =
	tournamentWinner(
		[
			['Bulls', 'Eagles'],
			['Bulls', 'Bears'],
			['Bulls', 'Monkeys'],
			['Eagles', 'Bears'],
			['Eagles', 'Monkeys'],
			['Bears', 'Monkeys'],
		],
		[1, 1, 1, 1, 1, 1]
	) === 'Bulls';

console.log(testOne);
console.log(testTwo);
console.log(testThree);
