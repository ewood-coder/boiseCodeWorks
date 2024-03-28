import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"



/**
  * @param {{name, price, body, fastestTime, startTime, endTime}} data 
  */

export class Jumble {
	constructor (data) {
		this.id = generateId()
		this.name = data.name
		this.body = data.body
		// to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
		this.fastestTime = null
		this.startTime = null
		this.endTime = null
	}

	get ListTemplate() { // a basic list template to get drawing
		return `<li>${this.name}</li>`
	}

	get JumblesTextTemplate() {
		return `<p>${this.body}</p>`
	}
}