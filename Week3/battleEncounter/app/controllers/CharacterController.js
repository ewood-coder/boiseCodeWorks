import { characterService } from "../services/CharactersService.js"

// NOTE: the export on the class here lets us export our controller as a bundle of code to be accessed
export class CharacterController {

	// NOTE: this was initially a function, but since its in a class it no longer needs 'function'
	shankCharacter(characterName) {
		console.log('Shanking ', characterName)
		characterService.shankCharacter(characterName)
	}

}
