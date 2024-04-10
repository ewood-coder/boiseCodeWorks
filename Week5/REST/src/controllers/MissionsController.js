import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { missionsService } from "../services/MissionsService.js";



export class MissionsController extends BaseController {

	constructor () {
		super('api/missions')
		this.router
			.use((request, response, next) => {
				console.log('🏇 Middleware activated')
				next()
			})
			.get('', this.getMissions)
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createMission)
			.use(Auth0Provider.getAuthorizedUserInfo)
			.put('/:missionId', this.updateMission)
	}


	async getMissions(request, response, next) {
		try {
			const searchQuery = request.query // why not just enable query searching here?
			const missions = await missionsService.getMissions(searchQuery)
			response.send(missions)
		}
		catch (error) {
			next(error)
		}
	}

	async createMission(request, response, next) {
		try {
			const missionData = request.body
			const mission = await missionsService.createMission(missionData)
			response.send(mission)
		}
		catch (error) {
			next(error)
		}
	}

	async updateMission(request, response, next) {
		try {
			const missionId = request.params.missionId
			const updateData = request.body
			const updatedMission = await missionsService.updateMission(missionId, updateData)

			response.send(updatedMission)
		}
		catch (error) {
			next(error)
		}
	}
}