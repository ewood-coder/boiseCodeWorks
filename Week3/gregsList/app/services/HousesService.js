import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HousesService {
	createHouse(houseData) {
		// NOTE house data is what we call a POJO (plain old js object)
		console.log('service creating house 🪚', houseData);
		const createdHouse = new House(houseData)
		console.log('✨🏠', createdHouse);
		AppState.houses.push(createdHouse)
		this.saveHouses()
	}

	deleteHouse(houseId) {
		let indexToDelete = AppState.houses.findIndex(house => house.id == houseId) // find the position of the house we want to delete
		console.log('deleting', indexToDelete);
		AppState.houses.splice(indexToDelete, 1) // removes the item from the array
		this.saveHouses() // re-saves our local storage, it will no longer include that house
	}

	saveHouses() {
		let dataString = JSON.stringify(AppState.houses) // when items are stringified, their class is stripped
		localStorage.setItem('houses', dataString)
	}

	loadHouses() {
		let dataString = localStorage.getItem('houses') // pulls a string of data out of the local storage
		console.log('🕴️01010001010', dataString);
		const housesData = JSON.parse(dataString) // converts the string into POJOS
		console.log('🥷 The house is starting to believe', housesData);
		if (housesData == null) return // if there is no data, stop the function early

		const houses = housesData.map(house => new House(house))
		console.log('🏠🏠🥷', houses);
		AppState.houses = houses // no push here, because we don't want to add an array INTO and array, be re-assign our appstate to equal what came out of the local storage
	}
}


// NOTE this creates a 'singleton', or a single service to be used everywhere it needs to be
export const housesService = new HousesService()