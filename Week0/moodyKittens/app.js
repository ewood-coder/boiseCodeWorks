let kittens = []
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
	event.preventDefault()
	let form = event.target

	let newKitten = {
		name: form.name.value,
		affection: 5,
		id: generateId(),
	}

	let oldKitten = kittens.find((kitten) => {
		return kitten.name == newKitten.name
	})
	if (oldKitten) {
		alert('Kitten with name already exists. Please enter a different name.')
	} else {
		kittens.push(newKitten)
		form.reset()
		saveKittens()
		drawKittens()
	}
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens
 */
function saveKittens() {
	const kittensString = JSON.stringify(kittens)
	localStorage.setItem('kittens', kittensString)
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
	let kittensString = localStorage.getItem('kittens')
	let parsed = JSON.parse(kittensString)
	if (kittensString) {
		kittens = parsed
	}
}
/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
	let kittensList = document.getElementById('kittens-list')
	let html = ''
	kittens.forEach((kitten) => {
		let url = ''
		let mood = ''
		if (kitten.affection >= 8) {
			url = 'img/cuddlyCat.png'
			mood = 'cuddly'
		} else if (kitten.affection > 3) {
			url = 'img/happyCat.png'
			mood = 'happy'
		} else if (kitten.affection > 1) {
			url = 'img/madCat.png'
			mood = 'angry'
		} else {
			url = 'img/sadCat.png'
			mood = 'sad'
		}

		html += `
		<div class="exampleKitten">
			<h3 class="mt-1 mb-1">${kitten.name}</h3>
			<div class="space-between">
				<div>
					<img class="kitten" src="${url}" alt="Picture of happy cat" />
				</div>
				<div class="mb-1">
					<p>Mood:${mood} &nbsp;&nbsp;|&nbsp;&nbsp; Affection:${kitten.affection}</p>
					<button class="sameSize pt-3 pb-3" type="button" onclick="pet('${kitten.id}')">PET</button>
					<button class="sameSize pt-3 pb-3" type="button" onclick="catnip('${kitten.id}')">CATNIP</button>
					<button class="sameSize pt-3 pb-3" type="button" onclick="clearKitten('${kitten.id}')">REMOVE</button>
				</div>
			</div>
		</div>
		`
	})
	kittensList.innerHTML = html
}

/**
 * Find the kitten in the array by its id
 * @param {string} id
 * @return {Kitten}
 */

function findKittenById(id) {
	console.log(id, kittens)
	let kitten = kittens.find((kitten) => {
		return kitten.id == id
	})
	console.log(kitten)
	return kitten
}

/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id
 */
function pet(id) {
	let kitten = findKittenById(id)
	let number = Math.random()
	if (number > 0.5) {
		kitten.affection += 1
	} else {
		kitten.affection -= 1
	}
	if (kitten.affection == 0) {
		clearKitten(id)
	}

	saveKittens()
	drawKittens()
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant (aka happy for this project)
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
	let kitten = findKittenById(id)
	kitten.affection = 5

	saveKittens()
	drawKittens()
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten
 */
function setKittenMood(kitten) {}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 */
function clearKitten(id) {
	kittens = kittens.filter((kitten) => {
		return kitten.id != id
	})

	saveKittens()
	drawKittens()
}

/**
 * Removes the welcome content and should probably draw the
 * list of kittens to the page. Good Luck
 */
function getStarted() {
	document.getElementById('welcome').remove()
	console.log('Good Luck, Take it away')
}

// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{id:string, name: string, affection: number}} Kitten
 */

/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
	return Math.floor(Math.random() * 10000000) + '-' + Math.floor(Math.random() * 10000000)
}

loadKittens()
drawKittens()
