import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from './models/Player.js'; // NOTE: IMPORTED Player.js TO THIS FILE TO USE new Player()

class ObservableAppState extends EventEmitter {

	/**@type {import('./models/Player.js').Player[]} */


	players = [
		new Player("Emma", 'woman1'),
		new Player("Derek", 'man1'),
		new Player("Kaylie", 'woman2'),
		new Player("Nathan", 'man2'),
		new Player("Sarah", 'woman3'),
	];
}

export const AppState = createObservableProxy(new ObservableAppState())

console.log('🏢', AppState)