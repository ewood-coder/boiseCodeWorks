import { AppState } from "../AppState.js"



export class House {
	constructor (data) {
		this.id = data.id
		this.bedrooms = data.bedrooms
		this.bathrooms = data.bathrooms
		this.levels = data.levels
		this.imgUrl = data.imgUrl
		this.year = data.year
		this.price = data.price
		this.description = data.description
		this.creatorId = data.creatorId
		this.creator = data.creator
		this.createdAt = new Date(data.createdAt)
	}



	get HouseCard() {
		return `
		<div class="col-12 col-md-6 mb-3">
			<div class="card">
				<img class="card-img-top"
					src="${this.imgUrl}"
					alt="Image of a ${this.year} home">
				<div class="card-body">
					<div class="row">
						<h3 class="card-title col-6">Year Built: ${this.year}</h3>
						<div class="text-secondary text-end col-6">Listed on: ${this.createdAt.toDateString()}</div>
					</div>
					<div class="card-text">
						<p>${this.description}</p>
					</div>
					<hr>
					<div class="row justify-content-around text-center">
						<h5 class="col normFont"><b><u>Bedrooms:</u></b>&nbsp;&nbsp;&nbsp;${this.bedrooms}</h5>
						<h5 class="col-1 text-center"> | </h5>
						<h5 class="col normFont"><b><u>Bathrooms:</u></b>&nbsp;&nbsp;&nbsp;${this.bathrooms}</h5>
						<h5 class="col-1 text-center"> | </h5>
						<h5 class="col normFont"><b><u>Levels:</u></b>&nbsp;&nbsp;&nbsp;${this.levels}</h5>
					</div>
					<hr>
					<div class="d-flex justify-content-between align-items-center">
						<h2 class="fw-bold"><span class="greenTxt">$${this.price}</span></h2>
						<div>
							<span class="text-secondary me-2">${this.creator.name}</span>
							<img class="profile-picture profile-picture-sm"
								src="${this.creator.picture}"
								alt="an image of ${this.creator.name}">
						</div>
					</div>
				</div>
			</div>
		</div>
 		`
	}
	get DeleteButton() {
		if (this.creatorId == AppState.account?.id) { // creatorId's are the account ids of the user that created the car. So we can compare them, to verify ownership
			return `
      <button onclick="app.HouseController.deleteHouse('${this.id}')" class="btn btn-danger" title="delete this house"><i class="mdi mdi-delete-forever"></i></button>
      `
		}
		return ''
	}
}