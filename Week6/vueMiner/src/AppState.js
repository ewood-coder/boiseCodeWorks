import { reactive } from 'vue'
import { ClickUpgrade } from './models/ClickUpgrade.js'
import { AutomaticUpgrade } from './models/AutomaticUpgrade.js'



// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
	/** @type {{name, picture, id}} user info from Auth0*/
	user: null,
	/** @type {import('./models/Account.js').Account} user info from the database*/
	account: null,


	// --------------------------------------
	triforce: 0,


	clickUpgrades: [
		new ClickUpgrade({
			name: 'pickaxe',
			emoji: '⛏️',
			price: 50,
			quantity: 0,
			multiplier: 1
		}),
		new ClickUpgrade({
			name: 'drill',
			emoji: '🪛',
			price: 250,
			quantity: 0,
			multiplier: 5
		})
	],

	automaticUpgrades: [
		new AutomaticUpgrade({
			name: 'mousetronaut',
			emoji: '🐭',
			price: 1000,
			quantity: 0,
			multiplier: 10
		}),
		new AutomaticUpgrade({
			name: 'space-station',
			emoji: '🛰️',
			price: 50000,
			quantity: 0,
			multiplier: 100
		})
	],

})
