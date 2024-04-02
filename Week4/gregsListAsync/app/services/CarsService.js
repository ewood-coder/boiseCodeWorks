import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";



class CarsService {

  // async getCars() {
  //   const response = await fetch('https://sandbox.codeworksacademy.com/api/cars')
  //   console.log('🚗🛰️', response);
  //   const carPojos = await response.json()
  //   console.log('🚗 pojos', carPojos);
  //   const cars = carPojos.map(car => new Car(car))
  //   console.log('✨🚗', cars);
  //   AppState.cars = cars
  // }

  async getCars() {
    // NOTE axios is a fetch wrapper, that can append to the baseURL in the env.js to make requests
    const response = await api.get('api/cars')
    console.log('🚗🪓', response);
    const cars = response.data.map(car => new Car(car)) // we need data here cause axios introduces data, to the response, which is the parsed body
    AppState.cars = cars
  }

  async createCar(carData) {
    const response = await api.post('api/cars', carData)
    console.log('🚗🪓✨', response);
    const car = new Car(response.data) // response.data is just a single object this time, so no need for map. Just make one new car
    AppState.cars.push(car)
  }

  async deleteCar(carId) {
    const response = await api.delete(`api/cars/${carId}`)
    console.log('🚗🪓💥', response);
    const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
    AppState.cars.splice(indexToRemove, 1)
  }

}

export const carsService = new CarsService()