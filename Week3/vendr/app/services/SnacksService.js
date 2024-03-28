import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";
import { loadState, saveState } from "../utils/Store.js";


class SnacksService {

	addQuarter() {
		AppState.money += .25
	}


	saveMySnacks() {
		saveState('my-snacks', AppState.snacks)
	}


	loadMySnacks() {
		const mySnacks = loadState('my-snacks', [Snack])
		AppState.snacks = mySnacks
	}


	buySnack(name) {
		let snack = AppState.snacks.find(snack => snack.name == name)

		if (AppState.money < snack.price) {
			console.log('NOT ENOUGH MONIES 😞')
			console.log("")
			return
		}
		else if (AppState.money >= snack.price) {
			AppState.money -= snack.price
			console.log('😋 purchased snack:', snack.name, '😋')
			console.log("")
			return
		}
	}
}


export const snacksService = new SnacksService()