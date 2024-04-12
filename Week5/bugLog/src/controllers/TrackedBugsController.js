import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { trackedBugsService } from "../services/TrackedBugsService.js";



export class TrackedBugsController extends BaseController {

	constructor () {
		super('api/trackedBugs')
		this.router
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createTrackedBug)
			.get('/:trackedBugId', this.getTrackedBugById)
			.delete('/:trackedBugId', this.destroyTrackedBug)
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

	async getTrackedBugById(request, response, next) {
		try {
			const trackedBugId = request.params.trackedBugId
			const trackedBug = await trackedBugsService.getTrackedBugById(trackedBugId)
			response.send(trackedBug)
		}
		catch (error) {
			next(error)
		}
	}

	async destroyTrackedBug(request, response, next) {
		try {
			const trackedBugId = request.params.trackedBugId
			const userInfo = request.userInfo
			const message = await trackedBugsService.destroyTrackedBug(trackedBugId, userInfo.id)
			response.send(message)
		}
		catch (error) {
			next(error)
		}
	}
}
