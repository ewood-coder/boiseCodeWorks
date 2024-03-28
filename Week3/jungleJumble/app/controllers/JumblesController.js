import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { setHTML, setText } from "../utils/Writer.js";


export class JumblesController {

	constructor () {
		console.log("jumbles controller loaded");
		this.drawJumblesList()
	}



	drawJumblesList() {
		const jumbles = AppState.jumbles
		let jumblesContent = ''
		jumbles.forEach(jumble => jumblesContent += jumble.ListTemplate)
		setHTML('jumbles-list', jumblesContent)
	}


}