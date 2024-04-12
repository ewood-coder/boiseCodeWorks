import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { bugsService } from "../services/BugsService.js";
import { trackedBugsService } from "../services/TrackedBugsService.js";
import { notesService } from "../services/NotesService.js";



export class BugsController extends BaseController {

	constructor () {
		super('api/bugs')
		this.router
			.get('', this.getBugs)
			.get('/:bugId', this.getBugById)
			.get('/:bugId/notes', this.getBugNotes)
			.get('/:bugId/trackedBugs', this.getTrackedBugByUsers)
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createBug)
			.put('/:bugId', this.updateBug)
			.delete('/:bugId', this.destroyBug)
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

	async getBugById(request, response, next) {
		try {
			const bugId = request.params.bugId
			const bug = await bugsService.getBugById(bugId)
			response.send(bug)
		}
		catch (error) {
			next(error)
		}
	}

	async updateBug(request, response, next) {
		try {
			const bugId = request.params.bugId
			const updateData = request.body
			const userInfo = request.userInfo
			updateData.creatorId = userInfo.id

			const updatedBug = await bugsService.updateBug(bugId, updateData)
			response.send(updatedBug)
		}
		catch (error) {
			next(error)
		}
	}

	async destroyBug(request, response, next) {
		try {
			const bugId = request.params.bugId
			const userInfo = request.userInfo
			const message = await bugsService.destroyBug(bugId, userInfo.id)
			response.send(message)
		}
		catch (error) {
			next(error)
		}
	}

	async getBugNotes(request, response, next) {
		try {
			const bugId = request.params.bugId
			const notes = await notesService.getBugNotes(bugId)
			response.send(notes)
		}
		catch (error) {
			next(error)
		}
	}

	async getTrackedBugByUsers(request, response, next) {
		try {
			const bugId = request.params.bugId
			const trackedBug = await trackedBugsService.getTrackedBugByUsers(bugId)
			response.send(trackedBug)
		}
		catch (error) {
			next(error)
		}
	}
}
