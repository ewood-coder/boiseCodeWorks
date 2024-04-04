import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { setHTML } from "../utils/Writer.js";
import { api } from "./AxiosService.js";


// eslint-disable-next-line no-undef
export const pokeApi = new axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon',
	timeout: 8000
})


class WildPokemonsService {

	async getWildPokemons() {
		const response = await axios.get(AppState.urlToCall)
		console.log("⚾", response)
		AppState.wildPokemon = response.data.results
		AppState.nextURL = response.data.next
		AppState.previousURL = response.data.previous
	}

	async setActivePokemon(name) {
		const response = await pokeApi.get(`/${name}`)
		console.log(response.data)
		AppState.activePokemon = new Pokemon(response.data)
	}

	catchActivePokemon() {
		AppState.myPokemon = [...AppState.myPokemon, AppState.activePokemon]
		console.log(AppState.myPokemon)
	}

	nextPage() {
		AppState.urlToCall = AppState.nextURL
		this.getWildPokemons()
	}

	previousPage() {
		AppState.urlToCall = AppState.previousURL
		this.getWildPokemons()
	}

}

export const wildPokemonsService = new WildPokemonsService()