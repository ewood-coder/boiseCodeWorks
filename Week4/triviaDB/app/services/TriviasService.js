import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"
import { loadState, saveState } from "../utils/Store.js";


class TriviasService {

	async getTrivias() {
		console.log('🃏📡');
		const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple')
		console.log('🃏🛰️', response);
		// const text = await response.text()
		// console.log('👹Text', JSON.parse(text));
		const pojos = await response.json() // converts the readable stream from text, to json, then to pojos
		console.log('🃏POJOs', pojos);
		const trivias = pojos.results.map(pojo => new Trivia(pojo)) // map performs the function on each item in the array, returning results. The results in this case is each pojo transformed into a "new Trivia"
		console.log('🃏Trivias', trivias);
		AppState.trivias = trivias // take the result of the map, and put it in the appstate
	}
}

export const triviasService = new TriviasService()
