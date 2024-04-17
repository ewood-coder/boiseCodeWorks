<script setup>
import { computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';
import { housesService } from '../services/HousesService.js';

defineProps({
	house: House
})

const account = computed(() => AppState.account)

async function destroyHouse(houseId) {
	try {
		const wantsToDestroy = await Pop.confirm("Are you sure you want to delete that house?")

		if (!wantsToDestroy) return

		logger.log('DESTROYING HOUSE 🏠🗑️', houseId)

		await housesService.destroyHouse(houseId)
	} catch (error) {
		Pop.error(error)
	}
}
</script>


<template>
	<div class="bg-light rounded shadow d-flex justify-content-between">
		<img :src="house.imgUrl" :alt="house.description + ' ' + house.price" class="img-fluid house-img rounded-start">
		<div class="p-3 w-100">
			<div class="row justify-content-evenly text-center flex-wrap">
				<h4 class="col-3">Year Built: <span class="fw-normal">{{ house.year }}</span></h4>
				<h4 class="col-3">Bedrooms: <span class="fw-normal">{{ house.bedrooms }}</span></h4>
				<h4 class="col-3">Bathrooms: <span class="fw-normal">{{ house.bathrooms }}</span></h4>
				<h4 class="col-3">Levels: <span class="fw-normal">{{ house.levels }}</span></h4>
			</div>

			<hr />
			<h3 class="fs-4 text-success mt-3">Price: ${{ house.price }}</h3>
			<hr />

			<p><u><b>Listed on</b></u>: {{ house.createdAt.toLocaleDateString() }} by {{ house.creator.name }}</p>
			<p><u><b>Updated on</b></u>: {{ house.updatedAt.toLocaleDateString() }}</p>
			<p><u><b>Description</b></u>: {{ house.description }}</p>
			<button v-if="house.creatorId == account?.id" @click="destroyHouse(house.id)" class="btn btn-outline-danger"
				:title="`Send the ${house.description} to the scrapyard`">
				<i class="mdi mdi-home-off"></i>
			</button>
		</div>
	</div>
</template>


<style scoped>
.house-img {
	width: 40%;
	height: 40vh;
	object-fit: cover;
}
</style>