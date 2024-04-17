import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class CarsService {
  async destroyCar(carId) {
    const response = await api.delete(`api/cars/${carId}`)
    logger.log('DESTROYED CAR 💥🧨💣', response.data)

    const cars = AppState.cars

    const carIndex = cars.findIndex(car => car.id == carId)

    if (carIndex == -1) throw new Error("You messed on findIndex, big dawg")

    cars.splice(carIndex, 1)
  }
  async createCar(carData) {
    const response = await api.post('api/cars', carData)
    logger.log('CREATED CAR 🚓🔧', response.data)
    const newCar = new Car(response.data)
    // unshift if data is sorted newest to oldest
    AppState.cars.unshift(newCar)
    // push if data is sorted oldest to newest
    // AppState.cars.push(newCar)
  }
  async getCars() {
    const response = await api.get('api/cars')
    // NOTE logger is similar to console, will not break your application during deployment
    logger.log('GOT CARS 🚗', response.data);

    // reverses arrary order
    response.data.reverse()
    AppState.cars = response.data.map(pojo => new Car(pojo))
  }
}

export const carsService = new CarsService()