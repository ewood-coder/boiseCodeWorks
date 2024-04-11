import { request } from "express"
import { dbContext } from "../db/DbContext.js"
import { NoteSchema } from "../models/Note.js"
import { Forbidden } from "../utils/Errors.js"



class NotesService {

	async getNotes(noteData) {
		const notes = await dbContext.Notes.find(noteData)
		return notes
	}

	async getNoteById(noteId) {
		const note = await dbContext.Notes.findById(noteId)
		await note.populate('creator')
		if (!note) throw new Error(`No note with ID: ${noteId}`)
		return note
	}

	async createNote(noteData) {
		const note = await dbContext.Notes.create(noteData)
		await note.populate('creator')
		return note
	}

	async getBugNotes(bugId) {
		//        -----------{ bugId: '66185a7f9ff1794147f82f58'}
		const notes = await dbContext.Notes.find({ bugId: bugId })
		return notes
	}

	async destroyNote(noteId, userId) {
		const noteToDestroy = await this.getNoteById(noteId)

		if (noteToDestroy.creatorId != userId) throw new Forbidden("That NOTE doesn't belong to you!")

		await noteToDestroy.deleteOne()
		return `${noteToDestroy.body} was removed`
	}

}

export const notesService = new NotesService()
