import { dbContext } from "../db/DbContext.js"



class JobsService {

	async getJobs() {
		const jobs = await dbContext.Jobs.find()
		return jobs
	}


	async searchJobs(searchQuery) {
		_queryBuilder(searchQuery)
		const jobs = await dbContext.Jobs.find(searchQuery)
		return jobs
	}


	async getJobById(jobId) {
		const job = await dbContext.Jobs.findById(jobId)
		if (!job) throw new Error(`No job by id: ${jobId}`)
		return job
	}
}



function _queryBuilder(searchQuery) {

	if (searchQuery.like) {

		// NOTE: "i" means it ignores capitalization on words. "g" means it will return all results that have the key's value in their description (which we set to search in the descriptions below). There are more, so look them up!
		let regex = new RegExp(searchQuery.like, "i")

		// NOTE: this is searching within the value of the "description" key for each job query
		searchQuery.description = { $regex: regex }

		delete searchQuery.like
	}
}


export const jobsService = new JobsService()
