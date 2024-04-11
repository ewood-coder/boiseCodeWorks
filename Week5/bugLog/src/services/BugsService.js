import { request } from "express"
import { dbContext } from "../db/DbContext.js"
import { BugSchema } from "../models/Bug.js"
import { Forbidden } from "../utils/Errors.js"



class BugsService {

	async getBugs(bugData) {
		const bugs = await dbContext.Bugs.find(bugData)
		return bugs
	}

	async createBug(bugData) {
		const bug = await dbContext.Bugs.create(bugData)
		await bug.populate('creator')
		return bug
	}

	async getBugById(bugId) {
		const bug = await dbContext.Bugs.findById(bugId)
		await bug.populate('creator')
		if (!bug) throw new Error(`No bug with ID: ${bugId}`)
		return bug
	}

	async updateBug(bugId, updateData) {
		const bugToUpdate = await this.getBugById(bugId)

		if (bugToUpdate.creatorId != updateData.creatorId) throw new Forbidden(`Cannot update things that don't belong to you`)

		bugToUpdate.title = updateData.title ?? bugToUpdate.title
		bugToUpdate.description = updateData.description ?? bugToUpdate.description

		await bugToUpdate.save()
		return bugToUpdate
	}

	async destroyBug(bugId, userId) {
		const bugToDestroy = await this.getBugById(bugId)

		if (bugToDestroy.creatorId != userId) throw new Forbidden("That doesn't belong to you!")

		await bugToDestroy.deleteOne()
		return `${bugToDestroy.description} was removed`
	}


}

export const bugsService = new BugsService()
