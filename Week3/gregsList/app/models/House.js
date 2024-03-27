import { generateId } from "../utils/GenerateId.js"



// REVIEW step 1: Define the data you are going to work with!
export class House {

	constructor (data) {
		this.id = data.id || generateId()
		this.year = parseInt(data.year)
		this.name = data.name
		this.bedrooms = parseFloat(data.bedrooms)
		this.bathrooms = parseFloat(data.bathrooms)
		this.sqft = parseFloat(data.sqft)
		this.price = parseFloat(data.price)
		this.description = data.description
		this.imgUrl = data.imgUrl
	}


	get HouseCard() {
		return `
			<div class="col-6 col-md-4 my-4">
				<div class="card h-100">
					<img class="card-img-top cardImg"
						src="${this.imgUrl}"
						alt="">
					<div class="card-body">
						<h3 class="card-title text-center text-success mb-3">${this.year} ${this.name}</h3>
						<hr />
						<span class="d-flex row justify-content-between my-2">
							<h5 class="card-text col-12"><i class="mdi mdi-bed-king-outline"></i> <u>Bedrooms:</u> ${this.bedrooms}</h5>
							<h5 class="card-text col-12"><i class="mdi mdi-shower"></i> <u>Bathrooms:</u> ${this.bathrooms}</h5>
							<h5 class="card-text col-12"><i class="mdi mdi-home-analytics"></i> <u>Square Feet:</u> ${this.sqft}</h5>
						</span>
						<p class="bg-success p-2 rounded text-light fw-bold text-center mt-4">Price: $${this.price}</p>
						<hr />
						<p class="my-1 py-1">${this.description}</p>
						<hr />
						<button onclick="app.HousesController.deleteHouse('${this.id}')" 
						class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
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
}