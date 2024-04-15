import { AppState } from "../AppState.js"


class GameService {

	mine() {
		console.log('hello work plz')
		AppState.triforce++

		let initialValue = 0
		const collectorCount = AppState.clickUpgrades.reduce(
			(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
			initialValue
		);

		AppState.triforce += collectorCount
		console.log(AppState.triforce)

	}

}


export const gameService = new GameService()
