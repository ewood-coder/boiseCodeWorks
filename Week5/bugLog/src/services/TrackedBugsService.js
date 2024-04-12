import { dbContext } from "../db/DbContext.js"
import { request } from "express"
import { TrackedBugSchema } from "../models/TrackedBug.js"
import { Forbidden } from "../utils/Errors.js"



class TrackedBugsService {

	async createTrackedBug(trackedBugData) {
		const trackedBug = await dbContext.TrackedBugs.create(trackedBugData)
		await trackedBug.populate('tracker')
		await trackedBug.populate('bug')
		return trackedBug
	}

	async getTrackedBugByUsers(bugId) {
		const trackedBugByUser = await dbContext.TrackedBugs.find({ bugId: bugId }).populate('tracker')
		return trackedBugByUser
	}

	async getBugsYouAreTracking(trackerId) {
		const myTrackedBugs = await dbContext.TrackedBugs.find({ accountId: trackerId }).populate('tracker').populate('bug')
		return myTrackedBugs
	}

	async getTrackedBugById(trackedBugId) {
		const trackedBug = await dbContext.TrackedBugs.findById(trackedBugId)
		if (!trackedBug) throw new Error(`No tracked bug with ID: ${trackedBugId}`)
		return trackedBug
	}

	async destroyTrackedBug(trackedBugId, userId) {
		const trackedBugToDestroy = await this.getTrackedBugById(trackedBugId)

		if (trackedBugToDestroy.accountId != userId) throw new Forbidden(`That tracked bug doesn't belong to you`)

		await trackedBugToDestroy.deleteOne()
		return `${trackedBugToDestroy} was removed`
	}
}

export const trackedBugsService = new TrackedBugsService()
