import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";


// eslint-disable-next-line no-undef
export const pokeApi = new axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon',
	timeout: 8000
})


class WildPokemonsService {



}

export const wildPokemonsService = new WildPokemonsService()