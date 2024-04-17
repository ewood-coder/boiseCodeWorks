<script setup>
import { computed } from 'vue';
import { Car } from '../models/Car.js';
import { carsService } from '../services/CarsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

defineProps({
  car: Car
})

const account = computed(() => AppState.account)

async function destroyCar(carId) {
  try {
    const wantsToDestroy = await Pop.confirm("Are you sure you want to delete that car?")

    if (!wantsToDestroy) return

    logger.log('DESTROYING CAR 🚗🗑️', carId)

    await carsService.destroyCar(carId)
  } catch (error) {
    Pop.error(error)
  }
}
</script>


<template>
  <div class="bg-light rounded shadow d-flex">
    <img :src="car.imgUrl" :alt="car.make + ' ' + car.model" class="img-fluid car-img rounded-start">
    <div class="p-3">
      <h2 class="fs-4">{{ car.year }} {{ car.make }} {{ car.model }}</h2>
      <h3 class="fs-5">${{ car.price }}</h3>
      <p>Listed on {{ car.createdAt.toLocaleDateString() }} by {{ car.creator.name }}</p>
      <p>{{ car.description }}</p>
      <button v-if="car.creatorId == account?.id" @click="destroyCar(car.id)" class="btn btn-outline-danger"
        :title="`Send the ${car.make} ${car.model} to the scrapyard`">
        <i class="mdi mdi-car-off"></i>
      </button>
    </div>
  </div>
</template>


<style scoped>
.car-img {
  width: 40%;
  height: 40vh;
  object-fit: cover;
}
</style>