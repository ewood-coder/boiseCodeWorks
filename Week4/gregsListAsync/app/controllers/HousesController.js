import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class HousesController {
	constructor () {
		console.log('🏠 🎮 loaded');
		this.getHouses()

		AppState.on('houses', this.drawHouses)
		AppState.on('account', this.drawHouses)
		AppState.on('account', this.showHouseForm)
		this.showHouseForm()
	}



	drawHouses() {
		const houses = AppState.houses
		let houseCards = ''
		houses.forEach(house => houseCards += house.HouseCard)
		setHTML('house-listings', houseCards)
	}

	async getHouses() {
		try {
			await housesService.getHouses()
		}
		catch (error) {
			console.log('❗', error)
			Pop.toast("Couldn't get houses, please try again later", "error")
		}
	}

	async showHouseForm() {
		const account = AppState.account
		if (account) {
			const formElm = document.getElementById('house-form')
			formElm.classList.remove('d-none')
		}
	}

	async createHouse() {
		try {
			event.preventDefault()
			console.log('Making a new listing for house');
			const form = event.target
			const houseData = getFormData(form)
			console.log(houseData)
			await housesService.createHouse(houseData)
		} catch (error) {
			console.error("❗", error)
			Pop.toast("Couldn't post House", "error")
		}
	}

}