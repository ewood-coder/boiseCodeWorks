
import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class JobsService {

	async destroyJob(jobId) {
		const response = await api.delete(`api/jobs/${jobId}`)
		logger.log('DESTROYED JOB 💥🧨💣', response.data)

		const jobs = AppState.jobs

		const jobIndex = jobs.findIndex(job => job.id == jobId)

		if (jobIndex == -1) throw new Error("You messed on findIndex, big dawg")

		jobs.splice(jobIndex, 1)
	}
	async createJob(jobData) {
		const response = await api.post('api/jobs', jobData)
		logger.log('CREATED JOB 💼🔧', response.data)
		const newJob = new Job(response.data)
		// unshift if data is sorted newest to oldest
		AppState.jobs.unshift(newJob)
		// push if data is sorted oldest to newest
		// AppState.cars.push(newCar)
	}
	async getJobs() {
		const response = await api.get('api/jobs')
		// NOTE logger is similar to console, will not break your application during deployment
		logger.log('GOT JOBS 🏢', response.data);

		// reverses arrary order
		response.data.reverse()
		AppState.jobs = response.data.map(pojo => new Job(pojo))
	}
}

export const jobsService = new JobsService()