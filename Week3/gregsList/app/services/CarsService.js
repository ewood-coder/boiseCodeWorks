import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";





class CarsService {
  createCar(carData) {
    // NOTE car data is what we call a POJO (plain old js object)
    console.log('service creating car 🧑‍🔧👩‍🔧', carData);
    // const createdCar = new Car(carData.make, carData.model...) this is no fun
    const createdCar = new Car(carData)
    console.log('✨🚗', createdCar);
    AppState.cars.push(createdCar)
    this.saveCars()
  }

  deleteCar(carId) {
    let indexToDelete = AppState.cars.findIndex(car => car.id == carId) // find the position of the car we want to delete
    console.log('deleting', indexToDelete);
    AppState.cars.splice(indexToDelete, 1) // removes the item from the array
    this.saveCars() // re-saves our local storage, it will no longer include that car
  }

  saveCars() {
    let dataString = JSON.stringify(AppState.cars) // when items are stringified, their class is stripped
    localStorage.setItem('cars', dataString)
  }

  loadCars() {
    let dataString = localStorage.getItem('cars') // pulls a string of data out of the local storage
    console.log('🕴️01010001010', dataString);
    const carsData = JSON.parse(dataString) // converts the string into POJOS
    console.log('🥷 The Car is starting to believe', carsData);
    if (carsData == null) return // if there is no data, stop the function early

    const cars = carsData.map(car => new Car(car))
    console.log('🚗🚗🥷', cars);
    AppState.cars = cars // no push here, because we don't want to add an array INTO and array, be re-assign our appstate to equal what came out of the local storage
  }
}


// NOTE this creates a 'singleton', or a single service to be used everywhere it needs to be
export const carsService = new CarsService()