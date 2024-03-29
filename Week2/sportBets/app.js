let bank = 100
let betsWon = 0
let betsLost = 0


const players = [
	{
		name: "D'Marcus Williums",
		teamNumber: 0,
		emoji: '🏃‍♂️',
		skill: 10
	},
	{
		name: "Tyroil Smoochie-Wallace",
		teamNumber: 0,
		emoji: '🤾‍♂️',
		skill: 30
	},
	{
		name: "Jackmerius Tacktheratrix",
		teamNumber: 0,
		emoji: '🏇',
		skill: 88
	},
	{
		name: "Javaris Jamar Javarison-Lamar",
		teamNumber: 0,
		emoji: '🏌️‍♀️',
		skill: 15
	},
	{
		name: "D'Pez Poopsie",
		teamNumber: 0,
		emoji: '🏋️‍♂️',
		skill: 77
	},
	{
		name: "D'Jasper Probincrux III",
		teamNumber: 0,
		emoji: '🏌️‍♂️',
		skill: 21
	},
	{
		name: "Leoz Maxwell Jilliumz",
		teamNumber: 0,
		emoji: '🤾',
		skill: 5
	},
	{
		name: "Hingle McCringleberry",
		teamNumber: 0,
		emoji: '🏂',
		skill: 99
	},
	{
		name: "L'Carpetron Dookmarriot",
		teamNumber: 0,
		emoji: '🧘‍♀️',
		skill: 50
	},
	{
		name: "Xmus Jaxon Flaxon-Waxon",
		teamNumber: 0,
		emoji: '🚶‍♀️',
		skill: 1
	},
	{
		name: "Saggitariutt Jefferspin",
		teamNumber: 0,
		emoji: '🏋️‍♀️',
		skill: 61
	},
	{
		name: "Quatro Quatro",
		teamNumber: 0,
		emoji: '🤺',
		skill: 34
	},
	{
		name: "X-Wing @Aliciousness",
		teamNumber: 0,
		emoji: '🏄',
		skill: 71
	},
	{
		name: "Bisquiteen Trisket",
		teamNumber: 0,
		emoji: '🧜‍♂️',
		skill: 76
	},
	{
		name: "Scoish Velociraptor Maloish",
		teamNumber: 0,
		emoji: '🤸',
		skill: 47
	},
	{
		name: "Donkey Teeth",
		teamNumber: 0,
		emoji: '⛹️‍♀️',
		skill: 23
	},
	{
		name: "T.J. A.J. R.J. Backslashinfourth V",
		teamNumber: 0,
		emoji: '🕴️',
		skill: 58
	},
	{
		name: "Firstname Lastname",
		teamNumber: 0,
		emoji: '💃',
		skill: 99
	},
	{
		name: "Dan Smith",
		teamNumber: 0,
		emoji: '🧍‍♂️',
		skill: 3
	},
	{
		name: "Tiger",
		teamNumber: 0,
		emoji: '🐅',
		skill: 100
	},
]



function draftPlayers() {
	console.log('Drafting Teams')

	players.forEach((player) => {
		let team = Math.random();

		if (team < 0.5) {
			player.teamNumber = 1;
		}
		else {
			player.teamNumber = 2;
		}
		console.log(player.teamNumber)
	});

	drawTeam()
}

function drawTeam() {

	let team1 = document.getElementById('team1')
	let team2 = document.getElementById('team2')

	let team1HTML = ''
	let team2HTML = ''

	players.forEach((player) => {
		if (player.teamNumber == 1) {
			team1HTML += player.emoji
		}
		else if (player.teamNumber == 2) {
			team2HTML += player.emoji
		}
	});

	team1.innerHTML = team1HTML
	team2.innerHTML = team2HTML
}

function betTeam(betAmount, teamNumber) {
	let initialValue = 0

	// BET IT ALL IF CASE
	if (betAmount == 'all') {
		betAmount = bank
	}

	if (betAmount > bank) {
		window.alert("GETCHO MONEY UP, NOT YO FUNNY UP")
		return
	}


	const team1 = players.filter((player) => player.teamNumber == 1);
	const team2 = players.filter((player) => player.teamNumber == 2);

	const totalSkillT1 = team1.reduce(
		(accumulator, player) => accumulator + (player.skill),
		initialValue
	);
	const totalSkillT2 = team2.reduce(
		(accumulator, player) => accumulator + (player.skill),
		initialValue
	);

	console.log('Team 1 Skill:', totalSkillT1)
	console.log('Team 2 Skill:', totalSkillT2)

	if (totalSkillT1 > totalSkillT2) {
		if (teamNumber == 1) {
			bank += betAmount
			window.alert('You Win: $' + betAmount)
			betsWon++
		}
		else {
			bank -= betAmount
			window.alert('You Lose: $' + betAmount)
			betsLost++
		}
	}
	else {
		if (teamNumber == 2) {
			bank += betAmount
			window.alert('You Win: $' + betAmount)
			betsWon++
		}
		else {
			bank -= betAmount
			window.alert('You Lose: $' + betAmount)
			betsLost++
		}
	}
	console.log('Amount in Bank:', bank)

	if (bank <= 0) {
		window.alert("YOU'VE BEEN BANNED FROM THE MICKEY MOUSE CLUBHOUSE FOR INAPPROPRIATE BEHAVIOR")
		window.close()
	}

	drawBank()
	drawWonLost()
	draftPlayers()
}

function drawBank() {
	let bankElm = document.getElementById('bank')

	bankElm.innerHTML = bank.toString()
}

function drawWonLost() {
	let betsWonElm = document.getElementById('betsWon')
	let betsLostElm = document.getElementById('betsLost')

	betsWonElm.innerHTML = betsWon.toString()
	betsLostElm.innerHTML = betsLost.toString()
}

drawWonLost()
drawBank()
draftPlayers()