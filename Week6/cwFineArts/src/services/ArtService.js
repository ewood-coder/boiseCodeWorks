import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js"
import { api } from "./AxiosService.js"



class ArtService {

	async getArt() {
		const response = await api.get('api/artworks')
		console.log("🖼️", response.data)
		const artworks = response.data.results.map(artData => new Art(artData))
	}


}

export const artService = new ArtService()
