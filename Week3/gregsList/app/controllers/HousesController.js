import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


// Public
export class HousesController {

	constructor () {
		console.log('🏠🎮 loaded');
		housesService.loadHouses()
		this.drawHouses()
	}


	drawHouses() {
		console.log('drawing the 🏠🏠🏠');
		const houses = AppState.houses // grab houses from the appstate
		let housesHTML = '' // create a placeholder, to add all the houses too
		// houses.forEach(house => housesHTML += `${house.make}|${house.model} .`) // start by drawing something small to test
		houses.forEach(house => housesHTML += house.HouseCard) // move to a more complex template when ready
		const houseListElm = document.getElementById('houses-list') // grab the houses-list element
		houseListElm.innerHTML = housesHTML // change it's inner content to equal that of our houses
	}

	createHouse() {
		event.preventDefault()
		// console.log(event.target.make.value); // Get single input values from form
		// console.log(event.target.model.value);
		// console.log(new FormData(event.target)); // Create a formData class from the form
		// console.log(getFormData(event.target)) // use utility to create object with key value pairs, from our input 'names' and 'values

		let houseData = getFormData(event.target)
		console.log('Creating a new house listing', houseData);
		housesService.createHouse(houseData)
		event.target.reset() // clears out the form so we can enter more data in and create more houses!
		this.drawHouses()
		Pop.toast('House Created!', 'success', 'top')
	}

	async deleteHouse(houseId) {
		// NOTE: this doesn't allow for the delete to NOT occur after interacting with the window
		// let choice = window.confirm('Are you sure you want to delete that?')
		let choice = await Pop.confirm("Are you sure you want to delete that?", 'This action cannot be reversed!', 'Yeah chuck it', 'warning')
		if (choice == false) return // end early if they clicked no/cancel

		console.log('deleting', houseId);
		housesService.deleteHouse(houseId)
		this.drawHouses()
		Pop.toast('House Deleted!')
	}


	closeModal() {
		// NOTE: some good ol, bootstrap magic to hide the modal after the form submission goes through
		bootstrap.Modal.getOrCreateInstance('#house-form-modal').hide()
	}
}