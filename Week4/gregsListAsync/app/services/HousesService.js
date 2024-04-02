import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";



class HousesService {

	async getHouses() {
		const response = await api.get('api/houses')
		console.log("🏠🪓", response);
		const houses = response.data.map(house => new House(house))
		AppState.houses = houses
	}

	async createHouse(houseData) {
		const response = await api.post('api/houses', houseData)
		console.log('🏠🪓✨', response);
		const house = new House(response.data)
	}

}

export const housesService = new HousesService()