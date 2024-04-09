import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";



export class HousesController extends BaseController {
	constructor () {
		super('api/houses')
		this.router
			.get('', this.getHouses)
			.get('/search', this.searchHouses) // this route must be above, the :houseId route, otherwise 'search' will be mistaken for an id
			.get('/:houseId', this.getHouseById)
	}

	async getHouses(request, response, next) {
		try {
			const houses = await housesService.getHouses()
			response.send(houses)
			console.log("Got some houses for ya 🏚️🏡🏘️🏠")
		} catch (error) {
			next(error)
		}
	}

	async searchHouses(request, response, next) {
		try {
			const searchQuery = request.query
			const houses = await housesService.searchHouses(searchQuery)
			response.send(houses)
		} catch (error) {
			next(error)
		}
	}

	async getHouseById(request, response, next) {
		try {
			const houseId = request.params.houseId
			const house = await housesService.getHouseById(houseId)
			response.send(house)
		} catch (error) {
			next(error)
		}
	}
}
