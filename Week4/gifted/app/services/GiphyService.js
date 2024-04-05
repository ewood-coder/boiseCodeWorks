import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js";


export const giphyApi = axios.create({
	baseURL: 'http://api.giphy.com/v1/gifs',
	timeout: 8000,
	params: {
		api_key: 'YUwCFFGLaH7IrTnD024azTAxwjq2sJAO',
		rating: 'pg',
		limit: 10,
	}
});



class GiphyService {

	async searchGif(formData) {
		const response = await giphyApi.get(`/search?q=${formData.search}`)
		console.log(response.data)
		return response.data.data
	}
}

export const giphyService = new GiphyService()