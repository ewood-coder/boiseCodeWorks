import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";



export class JobsController extends BaseController {
	constructor () {
		super('api/jobs')
		this.router
			.get('', this.getJobs)
			.get('/search', this.searchJobs) // this route must be above, the :houseId route, otherwise 'search' will be mistaken for an id
			.get('/:jobId', this.getJobById)
	}


	async getJobs(request, response, next) {
		try {
			const jobs = await jobsService.getJobs()
			response.send(jobs)
			console.log("Got some jobs for ya 🏢👷‍♀️⚒️👨‍🏭📝🖨️")
		} catch (error) {
			next(error)
		}
	}


	async searchJobs(request, response, next) {
		try {
			const searchQuery = request.query
			const jobs = await jobsService.searchJobs(searchQuery)
			response.send(jobs)
		} catch (error) {
			next(error)
		}
	}


	async getJobById(request, response, next) {
		try {
			const jobId = request.params.jobId
			const job = await jobsService.getJobById(jobId)
			response.send(job)
		} catch (error) {
			next(error)
		}
	}


}
