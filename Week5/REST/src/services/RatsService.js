import { request } from "express"
import { dbContext } from "../db/DbContext.js"
import { RatSchema } from "../models/Rat.js"



class RatsService {

	async getRats(searchQuery) {
		const rats = await dbContext.Rats.find(searchQuery)
		return rats
	}


}

export const ratsService = new RatsService()
