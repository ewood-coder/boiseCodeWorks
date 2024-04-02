import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { AppState } from "../AppState.js";
import { triviasService } from "../services/TriviasService.js";



export class TriviasController {

	constructor () {
		console.log("Ready to GUESS 🎮")
		this.getTrivias()
		this.drawTrivias()
		AppState.on('trivias', this.drawTrivias)
		AppState.on('trivias', () => {
			if (AppState.trivias.length == 0) {
				this.getTrivias()
			}
		})
	}


	drawTrivias() {
		console.log('🖊️🃏');
		const trivias = AppState.trivias
		let triviaTemplates = ''
		trivias.forEach(trivia => triviaTemplates += trivia.TriviaTemplate)
		setHTML('trivia-templates', triviaTemplates)
	}

	getTrivias() {
		triviasService.getTrivias()
		// this.drawTrivias() // ? why doesn't this one draw the monsters?
	}

	selectAnswer(id, isCorrectAnswer) {
		if (isCorrectAnswer == true) {
			Pop.success("Correct!")
			triviasService.removeTrivia(id)
		}
		else {
			Pop.error("Incorrect!")
		}
	}

	// async promiseExample() {
	// 	console.log('before promise');
	// 	const result = await Pop.confirm("Are your really sure?") // we want our code to PAUSE, awaiting the resolution of this promise before moving on.
	// 	console.log(result);
	// 	console.log('after promise', result);
	// }
}