<script setup>
import { logger } from '../utils/Logger.js';
import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { Modal } from 'bootstrap';

// NOTE allows us to v-for over this array for options
const engineTypes = [
  "unknown",
  "2 stroke",
  "4 cylinder",
  "v6",
  "v8",
  "v10",
  "v12",
  "small",
  "medium",
  "large",
  "chuncko"
]

const editableCarData = ref({
  make: '',
  model: '',
  year: 0,
  price: 0,
  engineType: 'unknown',
  color: '#000000',
  description: '',
  imgUrl: ''
})

async function createCar() {
  try {
    logger.log('Creating car! 🚗', editableCarData)
    // NOTE .value pulls out the data stored inside of the ref object (whatever is inside the parentheses)

    await carsService.createCar(editableCarData.value)

    // NOTE form.reset()
    editableCarData.value = {
      make: '',
      model: '',
      year: 0,
      price: 0,
      engineType: 'unknown',
      color: '#000000',
      description: '',
      imgUrl: ''
    }

    // NOTE closes Modal after submit
    Modal.getOrCreateInstance('#carFormModal').hide()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="modal fade" id="carFormModal" tabindex="-1" aria-labelledby="carFormModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="carFormModalLabel">Create a new Car!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <!-- NOTE .prevent is the equivalent of event.preventDefault() -->
          <form @submit.prevent="createCar()">

            <div class="form-floating mb-3">
              <!-- NOTE sets up 2-way-data-binding with a property inside of the ref object -->
              <input v-model="editableCarData.make" type="text" class="form-control" id="carMake" placeholder="Car Make"
                required maxlength="500">
              <label for="carMake">Car Make</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="editableCarData.model" type="text" class="form-control" id="carModel"
                placeholder="Car Model" required maxlength="500">
              <label for="carModel">Car Model</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="editableCarData.imgUrl" type="url" class="form-control" id="carImgUrl"
                placeholder="Car Image" required maxlength="500">
              <label for="carImgUrl">Car Image</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="editableCarData.year" type="number" class="form-control" id="carYear"
                placeholder="Car Year" required>
              <label for="carYear">Car Year</label>
            </div>

            <div class="form-floating mb-3">
              <input v-model="editableCarData.price" type="number" class="form-control" id="carPrice"
                placeholder="Car Price" required>
              <label for="carPrice">Car Price</label>
            </div>

            <div class="form-floating mb-3">
              <textarea v-model="editableCarData.description" class="form-control"
                placeholder="Leave a description here" id="carDescription" maxlength="500"></textarea>
              <label for="carDescription">Car Description</label>
            </div>

            <div class="mb-3">
              <label for="carColor" class="form-label">Car Color</label>
              <input v-model="editableCarData.color" type="color" class="form-control form-control-color" id="carColor"
                title="Choose your color">

            </div>

            <div class="mb-3">
              <label for="carEngine">Car Engine</label>
              <select v-model="editableCarData.engineType" class="form-select" id="carEngine"
                aria-label="Default select example">
                <option v-for="engineType in engineTypes" :key="engineType" :value="engineType">
                  {{ engineType }}
                </option>
              </select>
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