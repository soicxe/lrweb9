let name;
let countUser = 0;
let countComp = 0;
let countGame = 0;
let cards = [ 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace" ];
function isEmpty(str) {
	if ((str == undefined ? '' : str.trim() == '') || str === null) {
		return true;
	}
	return false;
}
function enterName() {
	do {
		name = prompt("Enter your name:");
		console.log(name);
	} while (isEmpty(name));
	document.getElementById("pp").textContent = "The card dropped to the " + name + ":";
}
function anim(name) {
	document.getElementById(name).animate(
		[
			{ transform: "scale(1) rotateX(0)" },
			{ transform: "scale(2.5) rotateX(-90deg)" },
			{ transform: "scale(1) rotateX(-180deg)" }
		],
		{
			easing: "linear",
			duration: 500,
			fill: "both",
			direction: "alternate-reverse"
		}
	)
}
function randNum() {
	if (countGame == 0) document.getElementById("pp4").textContent = "Try Again";
	if (countGame > 3) endGame();
	let valueUser = Math.floor(Math.random() * cards.length);
	let valueComp = Math.floor(Math.random() * cards.length);
	switch (valueUser) {
		case 5: countUser += 2;
			break;
		case 6: countUser += 3;
			break;
		case 7: countUser += 4;
			break;
		case 8: countUser += 11;
			break;
		default:
			countUser += cards[valueUser];
			break;
	}
	switch (valueComp) {
		case 5: countComp += 2;
			break;
		case 6: countComp += 3;
			break;
		case 7: countComp += 4;
			break;
		case 8: countComp += 11;
			break;
		default:
			countComp += cards[valueComp];
			break;
	}
	document.getElementById('valueUser').value = cards[valueUser];
	anim("valueUser");
	document.getElementById('valueComp').value = cards[valueComp];
	anim("valueComp");
	document.getElementById("pp2").textContent = "Score " + countComp + ":" + countUser;
	document.getElementById("pp3").textContent = "Number of attempts: " + ++countGame + "/3";
	if (countGame == 3) {
		alert("The end of game. To see the result press 'OK'");
		endGame();
	}
}
function endGame() {
	countGame = 0;
	countUser = 0;
	countComp = 0;
	document.getElementById("pp4").textContent = "New Game";
}
window.onload = enterName();