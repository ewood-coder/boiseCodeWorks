import { dbContext } from "../db/DbContext.js"
import { request } from "express"
import { TrackedBugSchema } from "../models/TrackedBug.js"



class TrackedBugsService {

	async createTrackedBug(trackedBugData) {
		const trackedBug = await dbContext.TrackedBugs.create(trackedBugData)
		await trackedBug.populate('tracker')
		await trackedBug.populate('bug')
		return trackedBug
	}

	async getTrackedBugByUsers(userId) {

		// NOTE: Look at missions in REST project to reference how to get the account info through the missions box from the "rat"
	}
}

export const trackedBugsService = new TrackedBugsService()
