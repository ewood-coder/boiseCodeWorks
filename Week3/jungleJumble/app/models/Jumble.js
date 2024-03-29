import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"
import { Pop } from "../utils/Pop.js"



/**
  * @param {{name, price, body, fastestTime, startTime, endTime}} data 
  */

export class Jumble {
	constructor (data) {
		this.id = generateId()
		this.name = data.name
		this.body = data.body
		// to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
		this.fastestTime = Infinity
		this.startTime = null
		this.endTime = null
	}

	get ListTemplate() { // a basic list template to get drawing
		return `
			<button class="col-2 my-2 fs-5 startButton">start</button>
			<span class="col-5 my-2">${this.name}</span>
			<span class="col-5 my-2">⏲️ ${this.fastestTime}s</span>
		`
	}

	get ActiveJumblesTemplate() {
		return `
		
		`
	}


	get FastestTime() {
		if (this.fastestTime == Infinity) {
			return '⏱️ N/A'
		}
		return `⏱️ ${(this.fastestTime / 1000).toFixed(4)}`
	}
}