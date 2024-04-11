import { request } from "express"
import { dbContext } from "../db/DbContext.js"
import { BugSchema } from "../models/Bug.js"



class BugsService {


	async getBugs(searchQuery) {
		const bugs = await dbContext.Bugs.find(searchQuery)
		return bugs
	}

	createBug(bugData) {
		const bug = await dbContext.Bugs.create(bugData)
		return bug
	}

}

export const bugsService = new BugsService()
