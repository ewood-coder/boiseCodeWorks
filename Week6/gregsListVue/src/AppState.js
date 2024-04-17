import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
	/** @type {{name, picture, id}} user info from Auth0*/
	user: null,
	/** @type {import('./models/Account.js').Account} user info from the database*/
	account: null,

	/** @type {import('./models/Car.js').Car[]} */
	cars: [],

	/** @type {import('./models/House.js').House[]} */
	houses: [],

	/** @type {import('./models/Job.js').Job[]} */
	jobs: [],
})
