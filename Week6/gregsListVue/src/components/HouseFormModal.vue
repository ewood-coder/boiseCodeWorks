<script setup>
import { logger } from '../utils/Logger.js';
import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { Modal } from 'bootstrap';

const editableHouseData = ref({
	bedrooms: 0,
	bathrooms: 0,
	levels: 0,
	price: 0,
	year: 0,
	description: '',
	imgUrl: ''
})

async function createHouse() {
	try {
		logger.log('Creating house! 🏠', editableHouseData)
		// NOTE .value pulls out the data stored inside of the ref object (whatever is inside the parentheses)

		await housesService.createHouse(editableHouseData.value)

		// NOTE form.reset()
		editableHouseData.value = {
			bedrooms: 0,
			bathrooms: 0,
			levels: 0,
			price: 0,
			year: 0,
			description: '',
			imgUrl: ''
		}

		// NOTE closes Modal after submit
		Modal.getOrCreateInstance('#houseFormModal').hide()
	}
	catch (error) {
		Pop.error(error);
	}
}
</script>


<template>
	<div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="houseFormModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="houseFormModalLabel">Create a new House!</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">

					<!-- NOTE .prevent is the equivalent of event.preventDefault() -->
					<form @submit.prevent="createHouse()">

						<div class="form-floating mb-3">
							<!-- NOTE sets up 2-way-data-binding with a property inside of the ref object -->
							<input v-model="editableHouseData.bedrooms" type="Number" class="form-control" id="houseBedrooms"
								placeholder="House Bedrooms" required maxlength="500" min='1'>
							<label for="houseBedrooms">House Bedrooms</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableHouseData.bathrooms" type="Decimal" class="form-control"
								id="houseBathrooms" placeholder="House Bathrooms" required min='1'>
							<label for="houseBathrooms">House Bathrooms</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableHouseData.levels" type="Number" class="form-control" id="houseLevels"
								placeholder="House Levels" required min='1'>
							<label for="houseLevels">House Levels</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableHouseData.year" type="Number" class="form-control" id="houseYear"
								placeholder="House Year" required>
							<label for="houseYear">House Year</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableHouseData.price" type="Number" class="form-control" id="housePrice"
								placeholder="House Price" required>
							<label for="housePrice">House Price $</label>
						</div>

						<div class="form-floating mb-3">
							<textarea v-model="editableHouseData.description" class="form-control"
								placeholder="Leave a description here" id="houseDescription" maxlength="500"></textarea>
							<label for="houseDescription">Insert House Description...</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableHouseData.imgUrl" type="url" class="form-control" id="houseImgUrl"
								placeholder="House Image" required maxlength="500">
							<label for="houseImgUrl">Insert House Image Address...</label>
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