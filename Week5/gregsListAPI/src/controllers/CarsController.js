import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";



export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getCars)
      .get('/search', this.searchCars) // this route must be above, the :carId route, otherwise 'search' will be mistaken for an id
      .get('/:carId', this.getCarById)
    // .get('color/:color', this.getCarByColor) THIS IS NOT RESTFUL
  }

  async getCars(request, response, next) {
    try {
      const cars = await carsService.getCars()
      response.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async searchCars(request, response, next) {
    try {
      const searchQuery = request.query
      const cars = await carsService.searchCars(searchQuery)
      response.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async getCarById(request, response, next) {
    try {
      const carId = request.params.carId
      const car = await carsService.getCarById(carId)
      response.send(car)
    } catch (error) {
      next(error)
    }
  }
}
