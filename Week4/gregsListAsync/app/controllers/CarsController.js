import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class CarsController {
  constructor() {
    console.log('ready to sell 🚗');
    this.getCars()
    AppState.on('cars', this.drawCars)
    AppState.on('account', this.drawCars) // this should re-draw the cars, drawing and delete buttons necessary
    AppState.on('account', this.showCarForm) // listen for the account, When someone logs in, it will be set, which tells us they are logged in
    this.showCarForm() // this one draws the form, if they logged in from a different page, and loaded the cars page later
  }


  drawCars() {
    const cars = AppState.cars
    let carCards = ''
    cars.forEach(car => carCards += car.CarCard)
    setHTML('car-listings', carCards)
  }


  // getCars() { GOT updated for better user experience
  //   carsService.getCars()
  // }
  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('❗', error)
      Pop.toast("Couldn't Get Cars, please try again later", 'error')
    }
  }

  showCarForm() {
    const account = AppState.account
    if (account) {
      const formElm = document.getElementById('car-form')
      formElm.classList.remove('d-none')
    }
  }

  async createCar() {
    try {
      event.preventDefault()
      console.log('making a new listing for car');
      const form = event.target
      const carData = getFormData(form)
      console.log(carData);
      await carsService.createCar(carData)
    } catch (error) {
      console.error('❗', error)
      Pop.toast("Couldn't Post Car", 'error')
    }
  }
  async deleteCar(carId) {
    try {
      const result = await Pop.confirm("are you sure you want to delete this car?")
      if (result == false) return

      await carsService.deleteCar(carId)
    } catch (error) {
      console.error('❗', error)
      Pop.toast("Couldn't Delete Car", 'error')
    }
  }
}