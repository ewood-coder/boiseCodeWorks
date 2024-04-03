import { AppState } from "../AppState.js"



export class Car {
	constructor (data) {
		this.id = data.id // the id comes from the api this time, so we just take it in, no need to generate it
		this.make = data.make
		this.model = data.model
		this.imgUrl = data.imgUrl
		this.year = data.year
		this.price = data.price
		this.description = data.description
		this.color = data.color
		this.engineType = data.engineType
		this.creatorId = data.creatorId
		this.creator = data.creator
		this.createdAt = new Date(data.createdAt)
		this.updatedAt = data.updatedAt
	}

	get CarCard() {
		return `
			<div class="col-12 col-md-6 my-3">
				<div class="card fixCard">
					<img class="card-img-top" src="${this.imgUrl}" alt="Image of a ${this.year}, ${this.make} ${this.model}">
					<div class="card-body">
						<h3 class="card-title">${this.make} ${this.model} ${this.year}</h3>
						<p class="card-text">${this.description}</p>
						<div class="d-flex justify-content-between align-items-center">
							<p class="fw-bold fs-4">$${this.price}</p>
							<div>
								<span class="text-secondary me-2">${this.creator.name}</span>
								<img class="profile-picture profile-picture-sm"
									src="${this.creator.picture}"
									alt="an image of ${this.creator.name}">
							</div>
						</div>
						<div class="text-secondary">Listed on ${this.createdAt.toDateString()}</div>
					</div>
					${this.DeleteButton}
				</div>
			</div>
 `
	}
	get DeleteButton() {
		if (this.creatorId == AppState.account?.id) { // creatorId's are the account ids of the user that created the car. So we can compare them, to verify ownership
			return `
      <button onclick="app.CarsController.deleteCar('${this.id}')" class="btn btn-danger" title="delete this car"><i class="mdi mdi-delete-forever"></i></button>
      `
		}
		return ''
	}
}


/**
 * make: String, required
model: String, required
imgUrl: String, required
year: Number, required
price: Number, required
description: String, 
color: String, 
engineType: String, 
creatorId: String (References Account Id), required
*creator: Object (Virtual Added by Database)
*createdAt: ISO Timestamp (Virtual Added by Database)
*updatedAt: ISO Timestamp (Virtual Added by Database)
 */