import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { missionsService } from "../services/MissionsService.js";
import { locationsService } from "../services/LocationsService.js";



export class LocationsController extends BaseController {

	constructor () {
		super('api/locations')
		this.router
			.get("", this.getLocations)
	}


	async getLocations(request, response, next) {
		try {
			const searchQuery = request.query // why not just enable query searching here?
			const locations = await locationsService.getLocations(searchQuery)
			response.send(locations)
		}
		catch (error) {
			next(error)
		}
	}
}
