import { generateId } from "../utils/GenerateId.js"



// REVIEW step 1: Define the data you are going to work with!
export class House {

	constructor (data) {
		this.id = data.id || generateId()
		this.year = parseInt(data.year)
		this.name = data.name
		this.bedrooms = parseInt(data.bedrooms)
		this.bathrooms = parseInt(data.bathrooms)
		this.sqft = parseInt(data.sqft)
		this.price = parseInt(data.price)
		this.description = data.description
		this.imgUrl = data.imgUrl
	}


	get CarCard() {
		return /*html*/`
			<div class="col-6 col-md-4 my-4">
				<div class="card">
					<img class="card-img-top cardImg"
						src="${this.imgUrl}"
						alt="">
					<div class="card-body">
						<h3 class="card-title text-center text-success mb-3">${this.year} ${this.name}</h3>
						<hr />
						<span class="d-flex row justify-content-between my-2">
							<h5 class="card-text col"><u>Bedrooms <i class="mdi mdi-bed-king-outline"></i>:</u> ${this.bedrooms}</h5>
							<h5 class="card-text col"><u>Bathrooms <i class="mdi mdi-shower"></i>:</u> ${this.bathrooms}</h5>
							<h5 class="card-text col"><u>Square Feet <i class="mdi mdi-home-analytics"></i>:</u> ${this.sqft}</h5>
						</span>
						<p class="bg-success p-2 rounded text-light fw-bold text-center">Price: $${this.price}</p>
						<p class="my-1">${this.description}</p>
						<button onclick="app.HousesController.deleteHouse('${this.id}')" 
						class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
					</div>
				</div>
			</div>
    	`
	}
}