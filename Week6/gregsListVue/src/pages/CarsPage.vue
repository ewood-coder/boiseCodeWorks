<script setup>
import { computed, onMounted } from 'vue';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
import CarFormModal from '../components/CarFormModal.vue';


const cars = computed(() => AppState.cars)
const account = computed(() => AppState.account)

async function getCars() {
	try {
		await carsService.getCars()
	}
	catch (error) {
		Pop.error(error);
	}
}

onMounted(() => {
	getCars()
})

</script>


<template>
	<div class="container">
		<section class="row">
			<div class="col-12 mt-3 d-flex align-items-center gap-4">
				<h1>Cars</h1>
				<!-- NOTE v-if="account != null" if the user is logged in, show the button -->
				<button v-if="account" class="btn btn-outline-dark" title="Create a new car listing!" data-bs-toggle="modal"
					data-bs-target="#carFormModal">
					<i class="mdi mdi-plus"></i>
				</button>
			</div>
		</section>

		<hr />

		<section class="row">
			<div v-for="car in cars" :key="car.id" class="col-12 mb-3">
				<CarCard :car="car" />
			</div>
		</section>
	</div>

	<CarFormModal />
</template>


<style scoped></style>