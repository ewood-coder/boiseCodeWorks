import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { Pop } from "../utils/Pop.js";
import { loadState, saveState } from "../utils/Store.js";


class JumblesService {

	setActiveJumble(jumbleId) {
		console.log('set active service', jumbleId)
		const selectedJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
		console.log('👁️👄👁️', selectedJumble);
		selectedJumble.startTime = new Date() // gets the time of right now!
		AppState.activeJumble = selectedJumble
		console.log('appstate active', AppState.activeJumble)

		this.saveJumbles()
	}


	checkJumbleBody(newBody) {
		const activeJumble = AppState.activeJumble
		if (activeJumble.body != newBody) throw new Error("You got Jumbled sucka!")

		activeJumble.endTime = new Date() // if we got it right, the set endtime
		// TODO: logic for fastest time?
		let elapsedTime = (activeJumble.endTime - activeJumble.startTime)

		if (activeJumble.fastestTime > elapsedTime) {
			activeJumble.fastestTime = elapsedTime
		}
		console.log('⏱️', activeJumble, elapsedTime)
		// NOTE: active jumble technically didn't change, it's inner content did so to make it redraw we can use emit
		AppState.emit('activeJumble') // forces all listeners on this event to run
		AppState.emit('jumbles')

		this.saveJumbles()
	}


	saveJumbles() {
		saveState('jumbles', AppState.jumbles)
	}

	loadJumbles() {
		const jumblesFromLocalStorage = loadState('jumbles', [Jumble])
		AppState.jumbles = jumblesFromLocalStorage
	}

}


export const jumblesService = new JumblesService()