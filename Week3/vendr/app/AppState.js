import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { loadState, saveState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {

	/**@type {number} */
	money = 0


	/** @type {Snack[]} */
	snacks = [
		new Snack({ name: 'Sample', price: 3.50, img: 'vml.png' }),
		new Snack({ name: 'Brussels Sprouts', price: 4.25, img: 'brusselsSprouts.jpg' }),
		new Snack({ name: 'Milk for shoes', price: 2.25, img: 'milk.jpg' }),
		new Snack({ name: 'Meatballs', price: 6.25, img: 'Meatballs.jpg' }),
		new Snack({ name: 'Huel', price: 30.50, img: 'huel.jpg' }),
		new Snack({ name: 'Veggie Bowl', price: 9.75, img: 'veggieBowl.jpg' }),
		new Snack({ name: 'Kebabs', price: 4.45, img: 'kebabs.jpg' }),
		new Snack({ name: 'Teriyaki Bowl', price: 5.00, img: 'teriyakiBowl.jpg' }),
		new Snack({ name: 'Veggie Wrap', price: 7.75, img: 'veggieWrap.jpg' }),
	]
}

export const AppState = createObservableProxy(new ObservableAppState())