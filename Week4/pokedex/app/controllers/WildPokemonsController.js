import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class WildPokemonsController {

	constructor () {
		console.log("WildPokemonsController loaded");
		this.getWildPokemons()
		AppState.on('wildPokemon', this.drawWildPokemon)
		AppState.on('activePokemon', this.drawActivePokemon)
		AppState.on('wildPokemon', this.hideORshowButtons)
		AppState.on('account', wildPokemonsService.loadMyPokemon)
		AppState.on('myPokemon', this.drawCaughtPokemon)

		// NOTE: CHANGED LINES UNDERNEATH INTO AN EVENT LISTENER ABOVE
		// TODO: GET THIS WORKING SO YOU CAN SAVE STUFF TO THE SANDBOX API
		// wildPokemonsService.loadMyPokemon()
	}

	async getWildPokemons() {
		try {
			await wildPokemonsService.getWildPokemons()
		} catch (error) {
			console.error(error)
			Pop.error("Could not get wild pokemon, try again later")
		}
	}

	// ----------------------------------------------------------------------
	// TODO: Try and get this disable function working
	setActivePokemon(name, caught) {
		wildPokemonsService.setActivePokemon(name, caught)
	}
	// ----------------------------------------------------------------------

	releasePokemon() {
		wildPokemonsService.releasePokemon()
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
		setHTML('activePokemon', activePokemon?.ActivePokemonTemplate ?? 'no pokemon selected')
	}

	catchActivePokemon() {
		try {
			wildPokemonsService.catchActivePokemon()
			Pop.success("Great catch! Gotta catch em' all!")
		}
		catch (error) {
			Pop.error("Error ocurred, could not catch pokemon.")
			console.error(error)
		}
	}

	nextPage() {
		wildPokemonsService.nextPage()
	}

	previousPage() {
		wildPokemonsService.previousPage()
	}

	hideORshowButtons() {
		let lastBtn = document.getElementById('lastBtn')
		if (AppState.previousURL) {
			lastBtn.classList.remove('hidden')
		} else {
			lastBtn.classList.add('hidden')
		}

		let nextBtn = document.getElementById('nextBtn')
		if (AppState.nextURL) {
			nextBtn.classList.remove('hidden')
		} else {
			nextBtn.classList.add('hidden')
		}
	}

	drawCaughtPokemon() {
		const pokemons = AppState.myPokemon
		let pokemonsList = ''
		pokemons.forEach(pokemon => pokemonsList += `<li class="fs-5 my-2" 
		onclick="app.WildPokemonsController.setActivePokemon('${pokemon.name}', true)">
		<i class="mdi mdi-pokeball fs-4"></i>&nbsp;${pokemon.name}</li>`)
		setHTML('wildPokemon', pokemonsList)
	}

	viewWildPokemon() {
		wildPokemonsService.getWildPokemons()
	}

	viewCaughtPokemon() {
		this.drawCaughtPokemon()
	}

}