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

	async releasePokemon() {
		const response = await api.delete('api/pokemon/' + AppState.activePokemon.id)
		console.log(response.data)
		AppState.myPokemon = AppState.myPokemon.filter(p => p.id != AppState.activePokemon.id)
		AppState.activePokemon = null
	}

	async getWildPokemons() {
		const response = await axios.get(AppState.urlToCall)
		console.log("⚾", response)
		AppState.nextURL = response.data.next
		AppState.previousURL = response.data.previous
		AppState.wildPokemon = response.data.results
	}

	async setActivePokemon(name, caught) {
		if (caught) {
			let found = AppState.myPokemon.find(pokemon => pokemon.name == name)
			AppState.activePokemon = found
			return
		}
		const response = await pokeApi.get(`/${name}`)
		console.log(response.data)
		AppState.activePokemon = new Pokemon(response.data)
	}

	catchActivePokemon() {
		AppState.myPokemon = [...AppState.myPokemon, AppState.activePokemon]
		console.log(AppState.myPokemon)
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

	async loadMyPokemon() {
		const response = await api.get('api/pokemon')
		AppState.myPokemon = response.data.map(d => new Pokemon(d, true))
	}
}

export const wildPokemonsService = new WildPokemonsService()