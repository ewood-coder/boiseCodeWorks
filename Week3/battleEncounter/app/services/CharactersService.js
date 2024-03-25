import { AppState } from "../AppState.js";

class CharacterService {
	shankCharacter(characterName) {
		console.log('🗡️🗡️🗡️');
		AppState.character.find(character => character.name == characterName)
		console.log('Are you stabbing ', characterToStab);
		characterToStab.health -= 3
		console.log(characterToStab)
	}
}

export const characterService = new CharacterService()