import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js";


// @ts-ignore
const giftApi = axios.create({
	baseURL: 'https://sandbox.codeworksacademy.com/api/gifts',
	timeout: 4000,
})


class GiftsService {


}

export const giftsService = new GiftsService()