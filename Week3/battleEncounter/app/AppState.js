import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

// NOTE: in order to use exported classes, you need to import it
import { Character } from './models/Character.js'

class ObservableAppState extends EventEmitter {

	/**@type {import('./models/Example.js').Example[]} */
	examples = []
	// NOTE: don't worry about this extra stuff here for now ^


	characters = [
		new Character('Slate Slabrock', 'dwarf', 5),
		new Character('Flint Ironstag', 'elf', 3),
		new Character('Thudd', 'ogre', 8),
	]





	// ----------------------------------------------------------
}

export const AppState = createObservableProxy(new ObservableAppState())


// REVIEW: take a look at the AppState
// NOTE: This will console log a proxy object, look inside the [[Target]]
console.log('🏢', AppState)