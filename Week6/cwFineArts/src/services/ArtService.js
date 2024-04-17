import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js"
import { api } from "./AxiosService.js"
``



class ArtService {

	async getArt() {
		const response = await api.get('api/artworks?page=' + AppState.currentPage)
		console.log("🖼️", response.data)
		AppState.artworks = response.data.artworks.map(artData => new Art(artData))

		AppState.currentPage = response.data.page
		AppState.totalPages = response.data.pages
	}

	async nextPage() {
		if (AppState.currentPage + 1 > AppState.totalPages) return
		AppState.currentPage++
		await artService.getArt()
	}

	async previousPage() {
		if (AppState.currentPage - 1 > AppState.totalPages) return
		AppState.currentPage--
		await artService.getArt()
	}

}

export const artService = new ArtService()
