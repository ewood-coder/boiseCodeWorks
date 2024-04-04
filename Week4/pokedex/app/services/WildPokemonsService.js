import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { Pokemon } from "../models/Pokemon.js";
import { loadState, saveState } from "../utils/Store.js";
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
		AppState.nextURL = response.data.next
		AppState.previousURL = response.data.previous
		AppState.wildPokemon = response.data.results
	}

	async setActivePokemon(name) {
		const response = await pokeApi.get(`/${name}`)
		console.log(response.data)
		AppState.activePokemon = new Pokemon(response.data)
	}

	catchActivePokemon() {
		AppState.myPokemon = [...AppState.myPokemon, AppState.activePokemon]
		console.log(AppState.myPokemon)
		// TODO: ASK WHY THIS IS GIVING A 401 ERROR
		api.post('api/pokemon', AppState.activePokemon)
	}

	nextPage() {
		AppState.urlToCall = AppState.nextURL
		this.getWildPokemons()
	}

	previousPage() {
		AppState.urlToCall = AppState.previousURL
		this.getWildPokemons()
	}

	loadMyPokemon() {
		// TODO: ASK WHY THIS IS GIVING A 401 ERROR
		const response = api.get('api/pokemon')
		AppState.myPokemon = response.data.map(d => new Pokemon(d))
	}
}

export const wildPokemonsService = new WildPokemonsService()