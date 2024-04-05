import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js";




class GiftsService {

	async getGifts() {
		const response = await api.get('api/gifts')
		console.log('🎁🛰️', response.data);
		const gifts = response.data.map(gift => new Gift(gift))
		AppState.gifts = gifts
	}
}

export const giftsService = new GiftsService()