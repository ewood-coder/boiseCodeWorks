import { AppState } from "../AppState.js";

class CharacterService {
	// NOTE: PERFORMS THE ACTION (changes data)
	shankCharacter(characterName) {
		console.log('🗡️🗡️🗡️');
		const characterToStab = AppState.characters.find(character => character.name == characterName)
		console.log('Are you stabbing ', characterToStab);
		characterToStab.health -= 3
		console.log(characterToStab)
	}
}

export const characterService = new CharacterService()