import { AppState } from "../AppState.js";
import { giphyService } from "../services/GiphyService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class GiphyController {
	constructor () {
		console.log('⌛🎮 loaded');
	}

	async searchGif() {
		event.preventDefault()
		const form = event.target
		const formData = getFormData(form)
		const search = await giphyService.searchGif(formData)
		console.log(search)
		const urlElem = document.getElementById('url')
		urlElem.value = search[0].url
	}

}