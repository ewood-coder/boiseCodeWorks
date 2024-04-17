<script setup>
import { computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { Job } from "../models/Job.js";
import { jobsService } from '../services/JobsService.js';

defineProps({
	job: Job
})

const account = computed(() => AppState.account)

async function destroyJob(jobId) {
	try {
		const wantsToDestroy = await Pop.confirm("Are you sure you want to delete that job?")

		if (!wantsToDestroy) return

		logger.log('DESTROYING JOB 🏢🗑️', jobId)

		await jobsService.destroyJob(jobId)
	} catch (error) {
		Pop.error(error)
	}
}
</script>


<template>
	<div class="bg-light rounded shadow d-flex justify-content-between">
		<div class="p-3 w-100">
			<div class="row justify-content-evenly text-center flex-wrap">
				<h4 class="col-4"><u>Company</u>: <span class="fw-normal">{{ job.company }}</span></h4>
				<h4 class="col-4"><u>Job Title</u>: <span class="fw-normal">{{ job.jobTitle }}</span></h4>
				<h4 class="col-4"><u>Hours</u>: <span class="fw-normal">{{ job.hours }}</span></h4>
			</div>

			<hr />
			<h2 class="text-success mt-3 text-center">Rate: ${{ job.rate }} / hr</h2>
			<hr />

			<p><u><b>Listed on</b></u>: {{ job.createdAt.toLocaleDateString() }} by {{ job.creator.name }}</p>
			<p><u><b>Updated on</b></u>: {{ job.updatedAt.toLocaleDateString() }}</p>

			<p><u><b>Description</b></u>: {{ job.description }}</p>
			<button v-if="job.creatorId == account?.id" @click="destroyJob(job.id)" class="btn btn-outline-danger"
				:title="`Send the ${job.description} to the scrapyard`">
				<i class="mdi mdi-briefcase-off"></i>
			</button>
		</div>
	</div>
</template>


<style scoped>
/* .job-img {
	width: 40%;
	height: 40vh;
	object-fit: cover;
} */
</style>