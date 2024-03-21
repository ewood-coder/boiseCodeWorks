


const heroes = [
	{
		name: 'Slate Slabrock',
		type: 'dwarf',
		damage: 5,
		health: 100
	},
	{
		name: 'Flint Ironstag',
		type: 'elf',
		damage: 10,
		health: 50
	}
]

const boss = {
	health: 100,
	maxHealth: 100,
	damage: 5,
	level: 1
}



function damageBoss() {
	let teamDamage = 0
	// let bossHealth = boss.health

	heroes.forEach(hero => {
		teamDamage += hero.damage
	})

	if (teamDamage >= boss.health) {
		boss.health = 0
	} else if (teamDamage < boss.health) {
		boss.health -= teamDamage
	}
	console.log('Damage to Boss:', teamDamage)
	console.log('Boss Health:', boss.health)


}

function damageHeroes() {
	// let eachHero = heroes.forEach(hero => {
	// 	hero.health
	// 	let heroHealth = calcDamage(hero)
	// })

	let hero1 = heroes[0].health
	let hero2 = heroes[1].health

	if (boss.damage >= hero1) {
		hero1 = 0
	} else if (boss.damage < hero1) {
		hero1 -= boss.damage
	}

	if (boss.damage >= hero2) {
		hero2 = 0
	} else if (boss.damage < hero2) {
		hero2 -= boss.damage
	}

	console.log('Hero 1 Health:', hero1)
	console.log('Hero 2 Health:', hero2)
	console.log('Damage to Heroes:', boss.damage)

}

// function calcDamage(hero) {

// 	let attackStrength = hero.health -= boss.damage
// 	if (boss.damage >= attackStrength) {
// 		attackStrength = 0
// 	} else if (boss.damage < attackStrength) {
// 		attackStrength -= boss.damage

// 	}
// 	console.log('Hero Health:', attackStrength)
// 	console.log('Damage to Heroes:', boss.damage)
// }

// function damageHeroes() {

// 	heroes.forEach(hero => {
// 		let heroHealth = hero.health -= boss.damage
// 		if (boss.damage >= heroHealth) {
// 			heroHealth = 0
// 		} else if (boss.damage < heroHealth) {
// 			heroHealth -= boss.damage

// 		}
// 		console.log('Hero Health:', heroHealth)
// 		console.log('Damage to Heroes:', boss.damage)
// 	})
// }