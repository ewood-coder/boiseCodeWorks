<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import JobCard from '../components/JobCard.vue';
import { jobsService } from '../services/JobsService.js';
import JobFormModal from '../components/JobFormModal.vue';


const jobs = computed(() => AppState.jobs)
const account = computed(() => AppState.account)

async function getJobs() {
	try {
		await jobsService.getJobs()
	}
	catch (error) {
		Pop.error(error);
	}
}

onMounted(() => {
	getJobs()
})

</script>


<template>
	<div class="container">
		<section class="row">
			<div class="col-12 mt-3 d-flex align-items-center gap-4">
				<h1>Jobs</h1>
				<!-- NOTE v-if="account != null" if the user is logged in, show the button -->
				<button v-if="account" class="btn btn-outline-dark" title="Create a new job listing!" data-bs-toggle="modal"
					data-bs-target="#jobFormModal">
					<i class="mdi mdi-plus"></i>
				</button>
			</div>
		</section>

		<hr />

		<section class="row">
			<div v-for="job in jobs" :key="job.id" class="col-6 mb-3">
				<JobCard :job="job" />
			</div>
		</section>
	</div>

	<JobFormModal />
</template>


<style scoped></style>