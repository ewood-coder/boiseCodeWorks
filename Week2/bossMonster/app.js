let gold = 0

const heroes = [
	{
		name: 'Slate',
		type: 'dwarf',
		damage: 5,
		maxDamage: 5,
		health: 100,
		maxHealth: 100,
		level: 6
	},
	{
		name: 'Flint',
		type: 'elf',
		damage: 10,
		maxDamage: 10,
		health: 50,
		maxHealth: 50,
		level: 3
	}
]

const boss = {
	health: 100,
	maxHealth: 100,
	damage: 5,
	level: 1,
	value: 10
}



function damageBoss() {
	let teamDamage = 0

	heroes.forEach(hero => {
		if (hero.health > 0) {
			teamDamage += hero.damage
		}
	})

	if (teamDamage >= boss.health) {
		boss.health = 0
	} else if (teamDamage < boss.health) {
		boss.health -= teamDamage
	}
	console.log('👿 Damage to Boss:', teamDamage)
	console.log('💜 Boss Health:', boss.health)
	console.log("")

	levelUpHeroes()
	levelUpBoss()
	drawBoss()
	drawHeroes()
}

function levelUpBoss() {
	if (boss.health <= 0) {
		boss.level++
		boss.maxHealth = boss.maxHealth * 2
		boss.health = boss.maxHealth

		gold += boss.value

		boss.value = boss.value * 2
		console.log('💹 Boss New Value:', boss.value)
		console.log("")
	}
}

function levelUpHeroes() {
	heroes.forEach((hero) => {
		if (boss.health <= 0) {
			if (hero.health > 0) {
				hero.level++
				hero.maxDamage = hero.maxDamage * 1.5
				hero.damage = hero.maxDamage

				console.log('🆙', hero.name, 'Leveled Up! 🆙')
				console.log("")
			}
		}
	});
}

function damageHeroes() {
	heroes.forEach(hero => {

		if (boss.damage >= hero.health) {
			hero.health = 0
			return
		} else if (boss.damage < hero.health) {
			hero.health -= boss.damage * boss.level
		}

		console.log('🥷', hero.name, "|", '❤️‍🩹', hero.health)
	})
	console.log('🩸 Damage to Heroes:', boss.damage)
	console.log("")

	drawHeroes()
	loseGame()
}

function healthpack(name) {
	let healthpack = 50

	if (gold < healthpack) {
		console.log('🪙 NOT ENOUGH FUNDS 🪙')
		console.log("")
		return
	}
	gold -= healthpack


	let hero = heroes.find(hero => {
		return hero.name == name
	})
	hero.health = hero.maxHealth


	console.log('💉 HEALING:', hero.name, '💉')
	console.log("")
}

function drawHeroes() {
	let heroesElem = document.getElementById('heroes')
	let heroesHTML = ''

	heroes.forEach((hero, i) => {
		if (hero.health > 0) {
			heroesHTML += `
			<div class="hero col-2 me-5 m-5">
				<div class="row">
					<img src="assets/hero${i + 1}.png" class="heroImg"></img>
				</div>
				<div class="row">
					<h5 class="col heroName">Name:</h5>
					<h5 class="col heroName text-end">${hero.name}</h5>
				</div>
				<div class="row">
					<h5 class="col heroHealth">Health:</h5>
					<h5 class="col heroHealth text-end">${hero.health}</h5>
				</div>
				<div class="row">
					<h5 class="col heroLevel">LVL:</h5>
					<h5 class="col heroLevel text-end">${hero.level}</h5>
				</div>
				<div class="row">
					<button class="col medpack text-center" 
					onclick="healthpack('${hero.name}')">
						<i class="mdi mdi-bottle-tonic-plus fs-3"></i>
					</button>
				</div>
			</div>`
		}
	})
	heroesElem.innerHTML = heroesHTML
}

function drawBoss() {
	let bossElem = document.getElementById('mainBoss')
	let bossHTML = ''

	bossHTML += `
		<div class="bossBox col-5 p-3">
			<div class="row p-1">
				<h5 class="col">Heroes Earned Gold:</h5>
				<h5 class="col text-end">${gold}</h5>
				<hr />
			</div>
			<div class="row p-1">
				<h5 class="col bossHealth">Health:</h5>
				<h5 class="col bossHealth text-end">${boss.health}</h5>
				<hr />
			</div>
			<div class="row p-1">
				<h5 class="col bossName text-center">SPACEY BOY</h5>
				<hr />
			</div>
			<div class="row">
				<img src="assets/boss.png" class="bossImg col w-100 h-100" onclick="damageBoss()"></img>
			</div>
		</div>`

	bossElem.innerHTML = bossHTML
}


const interval1 = setInterval(damageHeroes, 5000)
const interval2 = setInterval(damageBoss, 2000)

function loseGame() {
	if (heroes.every(hero => hero.health <= 0)) {
		clearInterval(interval1)
		clearInterval(interval2)

		console.log("🕹️ GAME OVER 🕹️")

		window.alert("🕹️ GAME OVER 🕹️");
		window.location.reload();
	}
}



drawBoss()
drawHeroes()