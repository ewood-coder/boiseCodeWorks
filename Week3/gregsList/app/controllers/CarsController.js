import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";




export class CarsController {
  constructor() {
    console.log('🚗🎮 loaded');
    carsService.loadCars()
    this.drawCars()
  }


  drawCars() {
    console.log('drawing the 🚗🚗🚗');
    const cars = AppState.cars // grab cars from the appstate
    let carsHTML = '' // create a placeholder, to add all the cars too
    // cars.forEach(car => carsHTML += `${car.make}|${car.model} .`) // start by drawing something small to test
    cars.forEach(car => carsHTML += car.CarCard) // move to a more complex template when ready
    const carListElm = document.getElementById('cars-list') // grab the cars-list element
    carListElm.innerHTML = carsHTML // change it's inner content to equal that of our cars
  }

  createCar() {
    event.preventDefault()
    // console.log(event.target.make.value); // Get single input values from form
    // console.log(event.target.model.value);
    // console.log(new FormData(event.target)); // Create a formData class from the form
    // console.log(getFormData(event.target)) // use utility to create object with key value pairs, from our input 'names' and 'values

    let carData = getFormData(event.target)
    console.log('Creating a new Car listing', carData);
    carsService.createCar(carData)
    event.target.reset() // clears out the form so we can enter more data in and create more cars!
    this.drawCars()
  }

  deleteCar(carId) {
    console.log('deleting', carId);
    carsService.deleteCar(carId)
    this.drawCars()
  }
}