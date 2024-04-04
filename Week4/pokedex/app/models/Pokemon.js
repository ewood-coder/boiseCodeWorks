


export class Pokemon {

	constructor (data) {
		this.id = data.id
		this.name = data.name
		this.weight = data.weight
		this.height = data.height
		this.types = data.types.map(t => t.type.name)
		this.img = data.sprites.front_default
	}

	get ActivePokemonTemplate() {
		return `
		<div class="card-border text-center d-flex justify-content-center bgRed px-2">
			<div class="brd-title bgWhite w-100">
				<h4 class="my-0 py-3">${this.name}</h4>
			</div>
		</div>

		<div class="d-flex justify-content-center py-2">
			<img src="${this.img}" alt="image of active pokemon" class="card-img">
		</div>

		<div class="card-border bgRed px-2">
			<div class="bgWhite borderBody p-1 row align-items-center justify-content-between mx-auto">
				<div class="col-12 col-md-6 my-0 py-2">
					<h5>Height: ${this.height}</h5>
				</div>
				<div class="col-12 col-md-6 my-0 py-2 text-md-end">
					<h5>Weight: ${this.weight}</h5>
				</div>
				<div class="col-12 col-md-6 my-0 py-2">
					<h5>Types: ${this.types.join(', ')}</h5>
				</div>
				<div class="col-12 col-md-6 my-0 py-2 text-center text-md-end">
					<button id="catchBtn" class="catch-btn pb-1" onclick="app.WildPokemonsController.catchActivePokemon()">
					<i class="mdi mdi-pokeball fs-4"></i>
						&nbsp;Catch
					</button>
				</div>
			</div>
		</div>
		`
	}

}
