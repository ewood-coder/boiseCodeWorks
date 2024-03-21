


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
	heroes.forEach(hero => {

		if (boss.damage >= hero.health) {
			hero.health = 0
		} else if (boss.damage < hero.health) {
			hero.health -= boss.damage
		}

		console.log(hero.name, "|", hero.health)
	})

	console.log('Damage to Heroes:', boss.damage)
}