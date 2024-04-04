import { Pokemon } from './models/Pokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

	user = null
	/**@type {import('./models/Account.js').Account | null} */
	account = null

	/** @type {{name: String, url: String}[]} */
	wildPokemon = []

	/** @type {Pokemon} */
	activePokemon = null


	/** @type {Pokemon[]} */
	myPokemon = []

	/** @type {string | null} */
	nextURL = null

	/** @type {string | null} */
	previousURL = null

	urlToCall = 'https://pokeapi.co/api/v2/pokemon'
}

export const AppState = createObservableProxy(new ObservableAppState())