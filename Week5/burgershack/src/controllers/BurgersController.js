import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
	constructor () {
		super('api/burgers');

		// NOTE: You can place multiple on the same this.router or separate them ex/
		// this.router
		// 	.get('', this.testBurgers)
		// 	.get('', this.getBurgers)

		this.router.get('/test', this.testBurgers)
		this.router.get('', this.getBurgers)
		this.router.post('', this.createBurger)
		this.router.delete('/:burgerId', this.deleteBurger)
	}

	testBurgers(request, response, next) {
		console.log('🍔🍔🍔🍔🍔')
		response.send('🍔 I got burgers for ya 🍔')
	}



	/**
	* Sends all values back to the client
	* @param {import("express").Request} request
	* @param {import("express").Response} response
	* @param {import("express").NextFunction} next
	*/

	async getBurgers(request, response, next) {
		try {
			const burgers = await burgersService.getBurgers()
			response.send(burgers) // then send that info back to the client
		}
		catch (error) {
			next(error) // next pushes then onto the next door, then the hall, until they are out of "next" options, which sends them home (usually with an error)
			console.error(error)
		}
	}


	async createBurger(request, response, next) {
		try {
			const burgerData = request.body
			const burger = await burgersService.createBurger(burgerData)
			console.log("CREATING BURGER 🔨🍔")
			response.send(burger)
		}
		catch (error) {
			next(error)
		}
	}


	async deleteBurger(request, response, next) {
		try {
			const burgerId = request.params.burgerId
			await burgersService.deleteBurger(burgerId)
			console.log("❌ Burger was deleted ❌")
			response.send("❌ Burger was deleted ❌")
		}
		catch (error) {
			next(error)
		}
	}
}