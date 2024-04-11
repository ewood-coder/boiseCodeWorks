import { request } from "express"
import { dbContext } from "../db/DbContext.js"
import { BugSchema } from "../models/Bug.js"



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

}

export const bugsService = new BugsService()
