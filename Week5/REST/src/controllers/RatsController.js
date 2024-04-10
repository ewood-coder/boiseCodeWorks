import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { ratsService } from "../services/RatsService.js";
import { missionsService } from "../services/MissionsService.js";



export class RatsController extends BaseController {

	constructor () {
		super('api/rats')
		this.router
			.get("", this.getRats)
	}


	async getRats(request, response, next) {
		try {
			const searchQuery = request.query // why not just enable query searching here?
			const rats = await ratsService.getRats(searchQuery)
			response.send(rats)
		}
		catch (error) {
			next(error)
		}
	}
}
