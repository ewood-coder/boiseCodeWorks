import { generateId } from "../utils/GenerateId.js"


export class Trivia {

	constructor (data) {
		this.id = data.id
		this.question = data.question
		this.correctAnswer = data.correct_answer
		this.incorrectAnswers = data.incorrect_answers
		this.allAnswers = [data.correct_answer, data.incorrect_answers[0], data.incorrect_answers[1], data.incorrect_answers[2]]
	}


	get TriviaTemplate() {
		return /* html */ `
		<!-- SECTION: QUESTION BOX -->
		<div class="d-flex justify-content-center mt-3 mt-md-3">
			<div class="row questionBox p-2 p-md-5 mt-1 mt-md-5 mx-1 mx-0-md text-center">
				<h1 class="col-12">${this.question}</h1>
			</div>
		</div>
	
	
		<!-- SECTION: ANSWER BOXES -->
		<div class="mt-5 d-flex justify-content-center">
			<div class="row w-100 d-flex justify-content-evenly">
				${this.AnswerButtons}
			</div>
		</div>
 	 `
	}

	get AnswerButtons() {
		let buttons = ''
		this.allAnswers.forEach(answer => buttons += `
			<button class="answerBoxes m-4 m-md-2 m-lg-4 col-10 col-md-5 col-lg-4" onclick>
				<h3 class="mb-1">D: ${answer}</h3>
			</button>
		`)
		return buttons
	}
}