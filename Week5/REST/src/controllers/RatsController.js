import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { ratsService } from "../services/RatsService.js";
import { missionsService } from "../services/MissionsService.js";



export class RatsController extends BaseController {

	constructor () {
		super('api/rats')
		this.router
			.get('', this.getRats)
			.get('/:ratId/missions', this.getRatsMission)
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

	async getRatsMission(request, response, next) {
		try {
			const ratId = request.params.ratId
			const missions = await missionsService.getRatsMission(ratId)
			response.send(missions)
		}
		catch (error) {
			next(error)
		}
	}

}
