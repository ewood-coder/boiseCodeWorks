import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { bugsService } from "../services/BugsService.js";
import { trackedBugsService } from "../services/TrackedBugsService.js";



export class BugsController extends BaseController {

	constructor () {
		super('api/bugs')
		this.router
			.get('', this.getBugs)
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createBug)
		// .get('/:ratId/missions', this.getRatsMission)
	}


	async getBugs(request, response, next) {
		try {
			const searchQuery = request.query
			const bugs = await bugsService.getBugs(searchQuery)
			response.send(bugs)
		}
		catch (error) {
			next(error)
		}
	}


	async createBug(request, response, next) {
		try {
			const bugData = request.body
			const userInfo = request.userInfo
			bugData.creatorId = userInfo.id
			const bug = await bugsService.createBug(bugData)
			response.send(bug)
		}
		catch (error) {
			next(error)
		}
	}

}
