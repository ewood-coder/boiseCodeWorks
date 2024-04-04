import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class WildPokemonsController {

	constructor () {
		console.log("WildPokemonsController loaded");
		this.getWildPokemons()
		AppState.on('wildPokemon', this.drawWildPokemon)
		AppState.on('activePokemon', this.drawActivePokemon)
	}

	async getWildPokemons() {
		try {
			await wildPokemonsService.getWildPokemons()
		} catch (error) {
			console.error(error)
			Pop.error("Could not get wild pokemon, try again later")
		}
	}

	setActivePokemon(name) {
		wildPokemonsService.setActivePokemon(name)
	}

	drawWildPokemon() {
		const pokemons = AppState.wildPokemon
		let pokemonsList = ''
		pokemons.forEach(pokemon => pokemonsList += `<li class="fs-5 my-2" 
		onclick="app.WildPokemonsController.setActivePokemon('${pokemon.name}')">
		<i class="mdi mdi-pokeball fs-4"></i>&nbsp;${pokemon.name}</li>`)
		setHTML('wildPokemon', pokemonsList)
	}

	drawActivePokemon() {
		const activePokemon = AppState.activePokemon
		setHTML('activePokemon', activePokemon.ActivePokemonTemplate)
	}

	catchActivePokemon() {
		wildPokemonsService.catchActivePokemon()
	}

	nextPage() {
		wildPokemonsService.nextPage()
	}

	previousPage() {
		wildPokemonsService.previousPage()
	}

}