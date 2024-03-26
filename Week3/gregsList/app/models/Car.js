import { generateId } from "../utils/GenerateId.js"



// REVIEW step 1: Define the data you are going to work with!
export class Car {
  // constructor(make, model, year, color, price, mileage, automatic, imgUrl) { replaced with data object
  constructor(data) {
    this.id = generateId()
    this.make = data.make
    this.model = data.model
    this.year = parseInt(data.year) // forms always return strings for everything, so changing it back into a number, could be beneficial
    this.color = data.color
    this.price = parseFloat(data.price) // to allow decimals
    this.mileage = parseInt(data.mileage)
    this.automatic = this.parseBool(data.automatic) // custom data formatter
    this.imgUrl = data.imgUrl
  }

  get CarCard() {
    return `
    <div class="col-6 col-md-4">
        <div class="card">
          <img class="card-img-top"
            src="${this.imgUrl}"
            alt="">
          <div class="card-body">
            <h3 class="card-title text-center text-success">${this.make} ${this.model} ${this.year}</h3>
            <p class="card-text">${this.color} ${this.mileage}
            <i class="mdi mdi-engine"></i><i class="mdi mdi-${this.TransmissionIcon}"></i>
            </p>
            <p class="bg-success p-2 rounded text-light fw-bold text-end">$${this.price}</p>
            <button onclick="app.CarsController.deleteCar('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
          </div>
        </div>
      </div>
    `
  }

  parseBool(value) {
    if (value == 'on' || value == true) {
      return true
    } else {
      return false
    }
  }

  get TransmissionIcon() {
    if (this.automatic) {
      return 'cog-box'
    } else {
      return 'account-cowboy-hat'
    }
  }
}