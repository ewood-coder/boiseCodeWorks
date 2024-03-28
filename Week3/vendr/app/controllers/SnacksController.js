import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";


export class SnacksController {

	constructor () {
		console.log("Gitchur Snacks! 🍕🍔🍟");
		this.drawSnacks() // draw when the page loads
		// NOTE register listeners (observer pattern). Listen to a piece of the AppState, and when it changes, run instructions
		AppState.on('money', () => console.log('Money has changed'))// example, listen to money, and when it changes, do the thing
		AppState.on('money', this.drawMoney)
		AppState.on('snacks', this.drawSnacks)
	}

	addQuarter() {
		snacksService.addQuarter()
	}

	drawSnacks() {
		const mySnacks = AppState.snacks
		let mySnacksContent = ''
		mySnacks.forEach(snack => mySnacksContent += snack.snackCardTemplate)
		setHTML('my-snacks', mySnacksContent)
	}

	drawMoney() {
		const money = AppState.money
		setText('money', `$${money.toFixed(2)}`)
		console.log(document.getElementById('money'))
		console.log("")
	}

	buySnack(name) {
		console.log('⬇️ attempting to buy snack ⬇️');
		snacksService.buySnack(name)
	}
}