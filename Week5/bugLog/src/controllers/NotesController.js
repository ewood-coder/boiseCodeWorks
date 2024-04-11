import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { trackedBugsService } from "../services/TrackedBugsService.js";
import { notesService } from "../services/NotesService.js";



export class NotesController extends BaseController {

	constructor () {
		super('api/notes')
		this.router
			.get('', this.getNotes)
			.get('/:noteId', this.getNoteById)
			.use(Auth0Provider.getAuthorizedUserInfo)
			.post('', this.createNote)
			.delete('/:noteId', this.destroyNote)
	}


	async getNotes(request, response, next) {
		try {
			const searchQuery = request.query
			const notes = await notesService.getNotes(searchQuery)
			response.send(notes)
		}
		catch (error) {
			next(error)
		}
	}


	async createNote(request, response, next) {
		try {
			const noteData = request.body
			const userInfo = request.userInfo
			noteData.creatorId = userInfo.id
			const note = await notesService.createNote(noteData)
			response.send(note)
		}
		catch (error) {
			next(error)
		}
	}

	async getNoteById(request, response, next) {
		try {
			const noteId = request.params.noteId
			const note = await notesService.getNoteById(noteId)
			response.send(note)
		}
		catch (error) {
			next(error)
		}
	}

	async destroyNote(request, response, next) {
		try {
			const noteId = request.params.noteId
			const userInfo = request.userInfo
			const message = await notesService.destroyNote(noteId, userInfo.id)
			response.send(message)
		}
		catch (error) {
			next(error)
		}
	}
}
