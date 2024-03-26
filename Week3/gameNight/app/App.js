import { router } from './router-config.js';
import { PlayersController } from './controllers/PlayersController.js';

class App {

	router = router

	// NOTE: this creates an app-wide controller for our user to access
	PlayersController = new PlayersController()

	init() {
		this.router.init(app)
	}

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
