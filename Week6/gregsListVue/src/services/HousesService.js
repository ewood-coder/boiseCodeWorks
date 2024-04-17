import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class HousesService {

	async destroyHouse(houseId) {
		const response = await api.delete(`api/houses/${houseId}`)
		logger.log('DESTROYED HOUSE 💥🧨💣', response.data)

		const houses = AppState.houses

		const houseIndex = houses.findIndex(house => house.id == houseId)

		if (houseIndex == -1) throw new Error("You messed on findIndex, big dawg")

		houses.splice(houseIndex, 1)
	}

	async createHouse(houseData) {
		const response = await api.post('api/houses', houseData)
		logger.log('CREATED HOUSE 🏡🔧', response.data)
		const newHouse = new House(response.data)
		// unshift if data is sorted newest to oldest
		AppState.houses.unshift(newHouse)
		// push if data is sorted oldest to newest
		// AppState.houses.push(newHouse)
	}

	async getHouses() {
		const response = await api.get('api/houses')
		// NOTE logger is similar to console, will not break your application during deployment
		logger.log('GOT HOUSES 🏘️', response.data);

		// reverses arrary order
		response.data.reverse()
		AppState.houses = response.data.map(pojo => new House(pojo))
	}
}

export const housesService = new HousesService()