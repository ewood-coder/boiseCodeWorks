import { dbContext } from "../db/DbContext.js"


class BurgersService {

	async getBurgers() {
		const burgers = await dbContext.Burgers.find()
		return burgers
	}


	async createBurger(burgerData) {
		const burger = await dbContext.Burgers.create(burgerData)
		return burger
	}


	async deleteBurger(burgerId) {
		const burgerToDelete = await dbContext.Burgers.findById(burgerId)

		if (!burgerToDelete) throw new Error(`Sorry, that burger was already deleted. Burger ID: ${burgerId}`)

		await dbContext.Burgers.deleteOne({ _id: burgerId })
	}
}

export const burgersService = new BurgersService()
