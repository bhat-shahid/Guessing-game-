let paragraph = document.getElementById("paraGraph");
let userInput = document.getElementById("userBox");
let button = document.getElementById("check-btn");
let resetBtn= document.getElementById("reset-btn");
let attempts = 4; // Set the maximum number of attempts
let x = Math.ceil(Math.random() * 100);
console.log(x);

function checkGuess() {
	let inputValue = parseInt(userInput.value);
	if (attempts > 0) {
		attempts--;

		if (inputValue === x) {
			paragraph.textContent = "Yes! You Got the Right Number";
			setTimeout(resetGame, 2000);
		} else {
			paragraph.innerHTML = `Sorry! Wrong Number. ${attempts} attempts left.`;
		}
	} else {
		paragraph.innerHTML = `Game Over! You've used all your attempts. Try Again.<br>The number is ${x}! Restarting...`;
		setTimeout(resetGame, 2000);
	}
};

function resetGame() {
	attempts = 4;
	x = Math.ceil(Math.random() * 100);
	paragraph.textContent = '';
	userInput.value = '';
	console.log(x);
}

// Add an event listener to the button
button.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);