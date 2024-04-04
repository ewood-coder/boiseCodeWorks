import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js";


export const giphyApi = axios.create({
	baseURL: 'http://api.giphy.com/v1/gifs',
	timeout: 8000,
	params: {
		key: 'YOUR_API_KEY',
		rating: 'pg',
		limit: 10,
	}
});



class GiphyService {


}

export const giphyService = new GiphyService()