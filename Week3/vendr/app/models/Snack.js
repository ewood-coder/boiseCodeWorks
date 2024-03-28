import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js"

export class Snack {

	/**
  * @param {{name, price, img?}} data 
  */

	constructor (data) {
		this.name = data.name
		this.price = data.price
		this.img = data.img
	}




	get snackCardTemplate() {
		return `
			<div class="card col-12 col-md-3" style="width: 18rem;">
				<img src="assets/img/${this.img}" class="card-img-top cardImg" alt="...">
				<div class="card-body">
					<span class="row">
						<h5 class="card-title">${this.name}</h5>
						<p class="card-text">$${this.price}</p>
					</span>
					<button class="mt-2" onclick="app.SnacksController.buySnack('${this.name}')">
						<span>BUY</span>
						<svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
							<path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
						</svg>
					</button>
				</div>
			</div>
		 `
	}
}