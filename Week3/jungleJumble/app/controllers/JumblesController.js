import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


function _focusCursorIntoJumbleTextArea() {
	document.getElementById('jumble-area').focus()
}

export class JumblesController {

	constructor () {
		console.log("jumbles controller loaded");
		this.drawJumblesList()
		// this.drawActiveJumble() NOTE: don't want to draw on load, when an active is null, unless you have some sort of placeholder
		AppState.on('activeJumble', this.drawActiveJumble)
		AppState.on('jumbles', this.drawJumblesList)
	}



	drawJumblesList() {
		const jumbles = AppState.jumbles
		let jumblesContent = ''
		jumbles.forEach(jumble => jumblesContent += jumble.ListTemplate)
		setHTML('jumbles-list', jumblesContent)
	}

	drawActiveJumble() {
		console.log('drawing Active')
		const activeJumble = AppState.activeJumble
		setHTML('active-jumble', activeJumble.ActiveJumblesTemplate)
		_focusCursorIntoJumbleTextArea() // cannot be in the class call because it loses scope inside the listener
	}

	setActiveJumble(jumbleId) {
		console.log('setting active', jumbleId); // can you invoke this function
		jumblesService.setActiveJumble(jumbleId)
	}

	submitJumble() {
		try {
			event.preventDefault()
			console.log("Form submitted!")
			const form = event.target
			const newBody = form.body.value
			console.log("✨", form, newBody)
			jumblesService.checkJumbleBody(newBody)
			Pop.toast('You Win!', 'success', 'center')
		}
		catch (error) {
			Pop.toast(error.message, 'error', 'center')
		}
	}

	startGame() {
		Pop.toast('🎮 Game Has Begun 🎮', 'success', 'top')
	}

}

