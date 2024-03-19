
// #region GAME LOGIC & DATA

// DATA
let clickCount = 0
let height = 140
let width = 100
let inflationRate = 20
let maxsize = 300
let highestPopCount = 0
let currentPopCount = 0
let gameLength = 10000
let clockId = 0
let timeRemaining = 0
let currentPlayer = {}
let currentColor = "red"
let possibleColors = ["red", "green", "blue", "purple", "pink"]


function startGame() {
	document.getElementById("game-controls").classList.remove("hidden")
	document.getElementById("main-controls").classList.add("hidden")
	document.getElementById("scoreboard").classList.add("hidden")

    startClock()
    setTimeout(stopGame, gameLength)
}

function startClock() {
    timeRemaining = gameLength
    drawClock()
    clockId = setInterval(drawClock, 1000)
}

function stopClock() {
    clearInterval(clockId)
}

function drawClock() {
    let countdownElem = document.getElementById("countdown")
    countdownElem.innerText = (timeRemaining / 1000).toString()
    timeRemaining -= 1000
}

function inflate() {
    clickCount++ // same as clickCount = clickCount + 1
    height += inflationRate
    width += inflationRate
	checkBalloonPop()
    draw()
}

function checkBalloonPop() {
	if (height >= maxsize ) {
        console.log("pop the balloon")
		let balloonElement = document.getElementById("balloon")
		balloonElement.classList.remove(currentColor)
		getRandomColor()
		balloonElement.classList.add(currentColor)

		// I dont get error squiggles for my code???
		document.getElementById("pop-sound").play()

        currentPopCount++
        height = 0
        width = 0
    }
}

function getRandomColor() {
	// Math.random() // Gives any number between 0 - 1 (includes decimals)
	let i = Math.floor(Math.random() * possibleColors.length);
	currentColor = possibleColors[i]
}

function draw() {
    let balloonElement = document.getElementById("balloon")
    let clickCountElem = document.getElementById("click-count")
    let popCountElem = document.getElementById("pop-count")
    let highPopCountElem = document.getElementById("high-pop-count")

	let playerNameElem = document.getElementById("player-name")


    balloonElement.style.height = height + "px"
    balloonElement.style.width = width + "px"

    clickCountElem.innerText = clickCount.toString()
    popCountElem.innerText = currentPopCount.toString()
    highPopCountElem.innerText = currentPlayer.topScore.toString()

	playerNameElem.innerText = currentPlayer.name
}

function stopGame() {
    console.log("The game is over")

    document.getElementById("main-controls").classList.remove("hidden")
	document.getElementById("scoreboard").classList.remove("hidden")
	document.getElementById("game-controls").classList.add("hidden")

    clickCount = 0
    height = 120
    width = 100

    if (currentPopCount > currentPlayer.topScore) {
        currentPlayer.topScore = currentPopCount
		savePlayers()
    }

    currentPopCount = 0

    stopClock()
    draw()
	drawScoreboard()
}

// #endregion



let players = []
loadPlayers()

function setPlayer(event) {
	event.preventDefault()
	let form = event.target

	let playerName = form.playerName.value

	currentPlayer = players.find(player => player.name == playerName)
	
	// ! = in the event that we DON'T have a current player
	if (!currentPlayer) {
		currentPlayer = {name: playerName, topScore: 0}
		players.push(currentPlayer)
		savePlayers()
	}

	form.reset()
	document.getElementById("game").classList.remove("hidden")
	form.classList.add("hidden")
	draw()
	drawScoreboard()
}

function changePlayer() {
	document.getElementById("player-form").classList.remove("hidden")
	document.getElementById("game").classList.add("hidden")
}

function savePlayers() {
	window.localStorage.setItem("players", JSON.stringify(players))
}

function loadPlayers() {
	let playersData = JSON.parse(window.localStorage.getItem("players"))
	if(playersData) {
		players = playersData
	}
}

function drawScoreboard() {
	let template = ""

	players.sort((p1, p2) => p2.topScore - p1.topScore)

	players.forEach(player => {
		template += `
			<div class="d-flex space-between">
				<span>
					<i class="fa fa-user"></i>
					${player.name}
				</span>
				<span>Score: ${player.topScore}</span>
			</div>
		`
	})

	document.getElementById("players").innerHTML = template
}

drawScoreboard()