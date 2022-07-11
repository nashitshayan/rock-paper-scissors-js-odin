// funcition to generate a random number between min and max (both included). We're only using it for number between 1 and 3

const random = (min, max) => Math.floor(Math.random() * max - min + 1) + min;

// function that returns either rock, paper or scissors based on the value returned by the random function

const computerPlay = () =>
	random(1, 3) === 1 ? 'rock' : random(1, 3) === 2 ? 'paper' : 'scissors';

//function where the player's selection and the computer's selection are checked and the output is return in the form of an array.
//The first element of the array is either -1,0,1 which represents whether the player lost, had a draw, or won, respectively.
//The second element of the returning array has the string that delcares who won and why. Eg : "You Win! Rock beats Scissors!"

function playRound(playerSelection, computerSelection) {
	let pSelect = playerSelection.toLowerCase(); // converting playerSelection into lowercase to make it case-insensitive (users can input 'rock', 'ROCK', 'rOcK' or any other combination)

	if (pSelect === computerSelection) return [0, 'DRAW!'];
	else if (pSelect === 'rock') {
		if (computerSelection === 'scissors')
			return [1, 'You Win! Rock beats Scissors!'];
		else return [-1, 'You Lose! Paper beats Rock!'];
	} else if (pSelect === 'paper') {
		if (computerSelection === 'rock') return [1, 'You Win! Paper beats Rock!'];
		else return [-1, 'You Lose! Scissors beat Paper!'];
	} else {
		if (computerSelection === 'rock')
			return [-1, 'You Lose! Rock beats Scissors!'];
		else return [1, 'You Win! Scissors beat Paper!'];
	}
}

// the main Game function that keeps score for both player and  computer and runs for a 5 round match.
//current issue: the prompt gets triggered immediately after you enter your choice. I want some way to delay the next prompt, so that the player can see if the results of the current round. right now it just goes on continuously.

function game() {
	console.log("Let's play Rock, Paper, Scissors!\n");
	let pScore = 0;
	let cScore = 0;
	for (let i = 1; i <= 5; i++) {
		console.log('Round ' + i);

		const playerSelection = prompt('Enter either Rock, Paper, or Scissors');

		const computerSelection = computerPlay();

		const resultArr = playRound(playerSelection, computerSelection);
		const result = resultArr[1]; //get the output string
		const resCode = resultArr[0]; // get the number i.e -1,0, or 1

		pScore = resCode === 1 ? ++pScore : pScore;
		cScore = resCode === -1 ? ++cScore : cScore;

		console.log('You chose ' + playerSelection.toLowerCase());
		console.log('Computer chose ' + computerSelection);
		console.log('Result : ' + result);
		console.log('Your Score : ' + pScore);
		console.log('Computer Score : ' + cScore);
	}

	let message =
		pScore > cScore
			? 'You are the Winner!'
			: pScore < cScore
			? 'The Computer wins this match!'
			: 'Wow! It is a draw!';
	console.log(message);
}

game();
