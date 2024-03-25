import { AppState } from "../AppState.js"
import { characterService } from "../services/CharactersService.js"

// NOTE: the export on the class here lets us export our controller as a bundle of code to be accessed
export class CharacterController {

	constructor () {
		// NOTE: our controller gets ran, when this controller 'Mounts' or on page load
		console.log('character 🎮 loaded');
		this.drawCharacterButtons()
	}



	drawCharacterButtons() {
		let buttonHTML = ''
		AppState.characters.forEach(character => buttonHTML += `
		<button class="btn btn-primary" onclick="app.CharacterController.shankCharacter('${character.name}')">
			🗡️ ${character.name} 🍷 [${character.healthPercent}]
		</button>
		`)
		let buttonsElm = document.getElementById('character-buttons')
		buttonsElm.innerHTML = buttonHTML
	}

	// NOTE: this was initially a function, but since its in a class it no longer needs 'function'
	// NOTE: TAKES IN THE ACTION
	shankCharacter(characterName) {
		console.log('Shanking ', characterName)
		characterService.shankCharacter(characterName)
		this.drawCharacterButtons()
	}

}
