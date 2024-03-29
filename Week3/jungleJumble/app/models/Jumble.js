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
			<button class="col-2 my-2 startButton flex-wrap" onclick="app.JumblesController.setActiveJumble('${this.id}');app.JumblesController.startGame();">start</button>
			<span class="col-5 my-2 fs-5">${this.name}</span>
			<span class="col-5 my-2 fs-5">${this.FastestTimeTemplate}</span>
		`
	}

	get ActiveJumblesTemplate() {
		return `
			<span class="row justify-content-between">
				<h4 class="col-4">${this.name}</h4>
				<h5 class="col-8 text-end">Fastest Time: ${this.FastestTimeTemplate}s</h5>
			</span>
			<p>${this.body}</p>
		`
	}


	get FastestTimeTemplate() {
		if (this.fastestTime == Infinity) {
			return '⏱️ N/A'
		}
		return `⏱️ ${(this.fastestTime / 1000).toFixed(4)}`
	}
}