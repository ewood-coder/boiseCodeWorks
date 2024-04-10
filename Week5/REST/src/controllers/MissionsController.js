import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { missionsService } from "../services/MissionsService.js";



export class MissionsController extends BaseController {
	constructor () {
		super('api/missions')
		// this.router
	}
}