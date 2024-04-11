import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { trackedBugsService } from "../services/TrackedBugsService.js";
import { notesService } from "../services/NotesService.js";



export class NotesController extends BaseController {

	constructor () {
		super('api/notes')
		this.router
		// .get('', this.getRats)
		// .get('/:ratId/missions', this.getRatsMission)
	}


	// async getRats(request, response, next) {
	// 	try {
	// 		const searchQuery = request.query // why not just enable query searching here?
	// 		const rats = await ratsService.getRats(searchQuery)
	// 		response.send(rats)
	// 	}
	// 	catch (error) {
	// 		next(error)
	// 	}
	// }

}
