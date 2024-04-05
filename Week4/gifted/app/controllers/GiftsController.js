import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class GiftsController {
	constructor () {
		console.log('🎁🎮 loaded');
	}

	async getGift() {
		try {
			await giftsService.getGift()
		}
		catch (error) {
			Pop.error("Could not get GIFT, failure to open")
			console.error(error)
		}
	}


}