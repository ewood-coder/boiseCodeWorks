import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class GiftsController {
	constructor () {
		console.log('🎁🎮 loaded');
		AppState.on('account', this.getGifts)
		AppState.on('gifts', this.drawGifts)

	}

	async getGifts() {
		try {
			await giftsService.getGifts()
		} catch (error) {
			Pop.error("Could not get GIFT, failure to open")
			console.error(error)
		}
	}

	async drawGifts() {
		let html = ''

		const gifts = AppState.gifts
		gifts.forEach(gift => {
			html += gift.GiftTemplate
		});
		setHTML("gifts", html)
	}


}