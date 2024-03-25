
let slate = {
	name: 'Slate Slabrock',
	race: 'dwarf',
	level: 5,
	health: 25,
	maxHealth: 25
}

let flint = {
	name: 'Flint Ironstag',
	title: 'Protector of squirrels',
	power: 5,
	hp: 20,
	maxHp: 20
}

// NOTE: Model classes are BLUEPRINTS for our data that will be stored
// NOTE: EXPORT makes this class available to any file that wants it
export class Character {
	// NOTE: This constructor holds the instructions on how to build (a character for this instance)
	constructor (name, race, level, health) {
		// this.name = "Slate Slabrock"
		// this.race = "dwarf"
		// this.level = 5
		// this.health = 25
		// this.maxHealth = this.health
		this.name = name
		this.race = race
		this.level = level
		this.health = 5 * this.level
		this.maxHealth = this.health
		// this.title = `${this.name} the level ${this.level} ${this.race}`
	}

	// NOTE: METHODS are functions, on a class, notice there is no 'function' in front of it
	levelUp() {
		console.log(this.name, '✨ DING')
		this.level++
		this.health = 5 * this.level
		this.maxHealth = this.health
		// this.title = `${this.name} the level ${this.level} ${this.race}`
	}

	// NOTE: GETTERS are calculated class properties. Their value will be the return value of the function within.
	get title() {
		return `${this.name} the level ${this.level} ${this.race}`
	}

	// NOTE: health percent will run the function, even thought this will appear as a property on our character
	get healthPercent() {
		let decimal = this.health / this.maxHealth
		let percent = Math.round(decimal * 100)
		return percent + "%"
	}
}

// for us in console to test:
// let slate = new Character('Slate Slabrock', 'dwarf', 5)