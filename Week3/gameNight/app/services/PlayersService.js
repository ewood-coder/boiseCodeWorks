import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";


class PlayerService {

	// NOTE: PERFORMS THE ACTION (changes data)
	addPoint(playerName) {
		console.log('➕')
		const playerToAdd = AppState.players.find(player => player.name == playerName)
		console.log('Are you adding to ', playerToAdd, '?');
		playerToAdd.score += 1
		console.log(playerToAdd)
	}

	// NOTE: PERFORMS THE ACTION (changes data)
	removePoint(playerName) {
		const playerToRemove = AppState.players.find(player => player.name == playerName)
		if (playerToRemove.score <= 0) {
			console.log("❌ CANT DEDUCT POINTS FROM 0 ❌")
			window.alert("❌ CANT DEDUCT POINTS FROM 0 ❌")
			return
		} else {
			console.log('➖')
			console.log('Are you subtracting from ', playerToRemove, '?');
			playerToRemove.score -= 1
			console.log(playerToRemove)
		}
	}


	addPlayer(name) {
		if (AppState.players.find((player) => player.name == name)) {
			console.log("🔒🪪 PLAYER NAME TAKEN. PLEASE CHOOSE A NEW NAME. 🪪🔒")
			window.alert("🔒🪪 Player name taken. Please choose a new name. 🪪🔒")
			return
		} else {
			let newPlayer = new Player(name)
			AppState.players.push(newPlayer)
		}
	}
}

export const playerService = new PlayerService()