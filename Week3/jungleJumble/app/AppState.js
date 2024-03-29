import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { loadState, saveState } from './utils/Store.js'


class ObservableAppState extends EventEmitter {

	/** @type {import('./models/Jumble.js').Jumble[]} */
	jumbles = [
		new Jumble({ name: '🐒 Jumble', body: "Monkeys go bananas for fruit salad, especially when it's filled with juicy pineapples." }),
		new Jumble({ name: '🦍 Jumble', body: "The gorilla juggled berries and grapes, adding them to the fruit salad one-by-one. As nimble as a spider monkey, the typist skillfully typed sentence after sentence." }),
		new Jumble({ name: '🦧 Jumble', body: "Oranges, apples, and bananas danced together in the bowl, creating a harmonious fruit salad. With each keystroke, the orangutan got closer to becoming a typing virtuoso. Hungry for success? Keep peeling away at those keys until you're the fastest typist in the jungle!" })
	]


	/** @type {Jumble} */
	activeJumble = null
}

export const AppState = createObservableProxy(new ObservableAppState())