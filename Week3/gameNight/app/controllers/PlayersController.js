import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { playerService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js";

export class PlayersController {

	constructor () {
		console.log('character 🎮 loaded');
		console.log(AppState.players)

		this.drawPlayerCards()
	}



	drawPlayerCards() {
		let playerHTML = ''

		AppState.players.forEach(player => playerHTML += player.PlayerCard)

		let playerElem = document.getElementById('player-list')
		playerElem.innerHTML = playerHTML
	}


	// NOTE: TAKES IN THE ACTION
	addPoint(playerName) {
		console.log('Attempting To Add Point: ', playerName)
		playerService.addPoint(playerName)
		this.drawPlayerCards()
	}

	// NOTE: TAKES IN THE ACTION
	removePoint(playerName) {
		console.log('Attempting To Remove Point: ', playerName)
		playerService.removePoint(playerName)
		this.drawPlayerCards()
	}



	addPlayer(event) {
		event.preventDefault()
		let formData = getFormData(event.target)
		event.target.reset()
		console.log('Form Data: ', formData) // NOTE: Displays the inputted information in the form to the console
		playerService.addPlayer(formData.name)
		this.drawPlayerCards()
	}

	showForm() {
		let formElem = document.getElementById('formDisplay')
		formElem.classList.remove('hidden')
	}

	hideForm() {
		let formElem = document.getElementById('formDisplay')
		formElem.classList.add('hidden')
	}
}