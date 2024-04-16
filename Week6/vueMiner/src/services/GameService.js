import { AppState } from "../AppState.js"


class GameService {

	mine() {
		AppState.triforce++

		let initialValue = 0
		const collectorCount = AppState.clickUpgrades.reduce(
			(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
			initialValue
		);

		AppState.triforce += collectorCount
		console.log(AppState.triforce)

	}

	buyClickUpgrade(name) {
		let upgrade = AppState.clickUpgrades.find((upgrade) => upgrade.name == name)
		if (AppState.triforce < upgrade.price) {
			console.log('🪙 NOT ENOUGH FUNDS 🪙')
			console.log("")
			return
		}
		else {
			AppState.triforce -= upgrade.price
			upgrade.quantity++
			upgrade.price += 100
			console.log("Purchased:", upgrade.emoji, upgrade.name, upgrade.emoji)
			console.log("Quantity Held:", upgrade.quantity)
			console.log("")
		}
	}

	buyAutomaticUpgrade(name) {
		let upgrade = AppState.automaticUpgrades.find((upgrade) => upgrade.name == name)
		if (AppState.triforce < upgrade.price) {
			console.log('🪙 NOT ENOUGH FUNDS 🪙')
			console.log("")
			return
		}
		else {
			AppState.triforce -= upgrade.price
			upgrade.quantity++
			upgrade.price += 500
			console.log("Purchased:", upgrade.emoji, upgrade.name, upgrade.emoji)
			console.log("Quantity Held:", upgrade.quantity)
			console.log("")
		}
	}

	collectAutoUpgrades() {
		let initialValue = 0

		const collectorCount = AppState.automaticUpgrades.reduce(
			(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
			initialValue
		);
		AppState.triforce += collectorCount
	}

}


export const gameService = new GameService()
