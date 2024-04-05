import { Gift } from './models/Gift.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

	user = null
	/**@type {import('./models/Account.js').Account | null} */
	account = null

	/** @type {Gift[]} */
	gifts = []

	// /** @type {Gift[]} */
	// myGifts = []
}

export const AppState = createObservableProxy(new ObservableAppState())