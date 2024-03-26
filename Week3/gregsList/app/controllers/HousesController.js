import { Pop } from "../utils/Pop.js"

// Public
export class HousesController {
	constructor () {
		console.log('This is the Home Controller')
	}

	testButton() {
		Pop.success('The button Works 😎')
	}
}