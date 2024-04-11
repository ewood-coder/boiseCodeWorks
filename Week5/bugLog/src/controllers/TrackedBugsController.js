import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { trackedBugsService } from "../services/TrackedBugsService.js";



export class TrackedBugsController extends BaseController {

	constructor () {
		super('api/trackedBugs')
		this.router
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createTrackedBug)

	}


	async createTrackedBug(request, response, next) {
		try {
			const trackedBugData = request.body
			const userInfo = request.userInfo
			trackedBugData.creatorId = userInfo.id
			const trackedBug = await trackedBugsService.createTrackedBug(trackedBugData)
			response.send(trackedBug)
		}
		catch (error) {
			next(error)
		}
	}
}
