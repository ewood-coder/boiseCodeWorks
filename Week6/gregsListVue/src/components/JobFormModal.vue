<script setup>
import { logger } from '../utils/Logger.js';
import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { jobsService } from '../services/JobsService.js';
import { Modal } from 'bootstrap';

const editableJobData = ref({
	company: '',
	jobTitle: '',
	hours: 0,
	rate: 0,
	description: '',
})

async function createJob() {
	try {
		logger.log('Creating job! 💼', editableJobData)
		// NOTE .value pulls out the data stored inside of the ref object (whatever is inside the parentheses)

		await jobsService.createJob(editableJobData.value)

		// NOTE form.reset()
		editableJobData.value = {
			company: '',
			jobTitle: '',
			hours: 0,
			rate: 0,
			description: '',
		}

		// NOTE closes Modal after submit
		Modal.getOrCreateInstance('#jobFormModal').hide()
	}
	catch (error) {
		Pop.error(error);
	}
}
</script>


<template>
	<div class="modal fade" id="jobFormModal" tabindex="-1" aria-labelledby="jobFormModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="jobFormModalLabel">Create a new Job!</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">

					<!-- NOTE .prevent is the equivalent of event.preventDefault() -->
					<form @submit.prevent="createJob()">

						<div class="form-floating mb-3">
							<!-- NOTE sets up 2-way-data-binding with a property inside of the ref object -->
							<input v-model="editableJobData.company" type="String" class="form-control" id="jobCompany"
								placeholder="Job Company" required maxlength="100">
							<label for="jobCompany">Company Name</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableJobData.jobTitle" type="String" class="form-control" id="jobTitle"
								placeholder="Job Title" required maxlength="100">
							<label for="jobTitle">Job Title</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableJobData.hours" type="Number" class="form-control" id="jobHours"
								placeholder="Job Hours" required min='1'>
							<label for="jobHours">Job Hours</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableJobData.rate" type="Number" class="form-control" id="jobRate"
								placeholder="Job Rate" required min='1'>
							<label for="jobRate">Job Rate (per hour)</label>
						</div>

						<div class="form-floating mb-3">
							<textarea v-model="editableJobData.description" class="form-control"
								placeholder="Leave a job description here" id="jobDescription" maxlength="5000"></textarea>
							<label for="jobDescription">Insert Job Description...</label>
						</div>

						<div class="text-end">
							<button class="btn btn-success" type="submit">Submit</button>
						</div>
					</form>


				</div>
			</div>
		</div>
	</div>

</template>


<style scoped></style>