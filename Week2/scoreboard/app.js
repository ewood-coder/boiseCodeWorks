let home = 0
let away = 0


// ******************************************** 
// ANCHOR: HOME TEAM FUNCTIONS

// SECTION: HOME TEAM POINT FUNCTIONS
function addPointHome1() {
	home += 1
	console.log('Home Score: ' + home)

	document.getElementById('home-score').innerHTML = '' + home


	calcWinner()
}

function addPointHome3() {
	home += 3
	console.log('Home Score: ' + home)

	document.getElementById('home-score').innerHTML = '' + home


	calcWinner()
}

function addPointHome5() {
	home += 5
	console.log('Home Score: ' + home)

	document.getElementById('home-score').innerHTML = '' + home


	calcWinner()
}

function removePointHome() {
	home -= 1
	if (home < 0) {
		home = 0
	}

	console.log('Home Score: ' + home +
		' | Removed Point')

	document.getElementById('home-score').innerHTML = '' + home
}

// ******************************************** 

// ANCHOR: AWAY TEAM FUNCTIONS

// SECTION: AWAY TEAM POINT FUNCTIONS
function addPointAway1() {
	away += 1
	console.log('Away Score: ' + away)

	document.getElementById('away-score').innerHTML = '' + away


	calcWinner()
}

function addPointAway3() {
	away += 3
	console.log('Away Score: ' + away)

	document.getElementById('away-score').innerHTML = '' + away


	calcWinner()
}

function addPointAway5() {
	away += 5
	console.log('Away Score: ' + away)

	document.getElementById('away-score').innerHTML = '' + away


	calcWinner()
}

function removePointAway() {
	away -= 1
	if (away < 0) {
		away = 0
	}

	console.log('Away Score: ' + away +
		' | Removed Point')

	document.getElementById('away-score').innerHTML = '' + away
}

// ******************************************** 

// ANCHOR: BOTH TEAM FUNCTIONS
// function draw() {


// 	newGame()
// }

function calcWinner() {

	if (home >= 21) {
		console.log('Team 1 is the winner!')
		window.alert("Team 1 is the winner!")
		newGame()
	}
	else if (away >= 21) {
		console.log('Team 2 is the winner!')
		window.alert("Team 2 is the winner!")
		newGame()
	}
}

function newGame() {
	home = 0
	away = 0

	document.getElementById('home-score').innerHTML = home.toString()

	document.getElementById('away-score').innerHTML = away.toString()

	console.log("|******** NEW GAME ********|")
}


// ******************************************** 