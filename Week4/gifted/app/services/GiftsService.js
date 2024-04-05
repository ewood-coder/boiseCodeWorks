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

	async openGift(id) {
		const gift = AppState.gifts.find(gift => id == gift.id)
		gift.opened = true
		const response = await api.put(`api/gifts/${id}`, gift)
		console.log(response.data)
		gift.url = response.data.url
		AppState.emit('gifts')
	}

	async createGift(formData) {
		const response = await api.post('api/gifts', formData)
		console.log(response.data)
		AppState.gifts.unshift(new Gift(response.data))
		AppState.emit('gifts')
	}
}

export const giftsService = new GiftsService()