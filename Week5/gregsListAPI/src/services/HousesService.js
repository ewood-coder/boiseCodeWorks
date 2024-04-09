import { dbContext } from "../db/DbContext.js"



class HousesService {

	async getHouses() {
		const houses = await dbContext.Houses.find()
		return houses
	}


	async searchHouses(searchQuery) {
		_queryBuilder(searchQuery)
		const houses = await dbContext.Houses.find(searchQuery)
		return houses
	}


	async getHouseById(houseId) {
		const house = await dbContext.Houses.findById(houseId)
		if (!house) throw new Error(`No house with id: ${houseId}`)
		return house
	}
}


//NOTE: MUST BE OUTSIDE OF CLASS. The "_" means it is global func only accessible by this file

// NOTE: ".like" searches through descriptions
function _queryBuilder(searchQuery) {

	if (searchQuery.like) {

		// NOTE: "i" means it ignores capitalization on words. "g" means it will return all results that have the key's value in their description (which we set to search in the descriptions below). There are more, so look them up!
		let regex = new RegExp(searchQuery.like, 'i')

		// NOTE: this is searching within the value of the "description" key for each house query
		searchQuery.description = { $regex: regex }

		delete searchQuery.like
	}
}

export const housesService = new HousesService()
