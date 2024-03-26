export class Player {

	constructor (name, picture) {
		// NOTE: Assigns a random picture in the array to to picture so each new player gets assigned a random photo
		if (!picture) {
			let random = Math.random() * 5
			let possibilities = [
				'woman1',
				'man1',
				'woman2',
				'man2',
				'woman3',
			]
			picture = possibilities[Math.floor(random)]
		}

		this.picture = picture
		this.name = name;
		// The score is defaulted to start at 0
		this.score = 0;
	}

	get PlayerCard() {
		return `
			<div class="player my-5">
				<h3 class="row align-items-center">
					<img class="col-2" src="assets/img/${this.picture}.jpg" alt="Avatar">
					<span class="col-3 text-start nameText">${this.name}</span>
					<span class="col text-end">
						<button class="btnMinus" onclick="app.PlayersController.removePoint('${this.name}')"><i class="mdi mdi-minus-circle-outline"></i></button>
						<span class="text-light mx-1 fs-2">${this.score}</span>
						<button class="btnPlus" onclick="app.PlayersController.addPoint('${this.name}')"><i class="mdi mdi-plus-circle-outline"></i></button>
					</span>
				</h3>
			</div>
		`
	}
}