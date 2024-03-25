import { router } from './router-config.js';
import { CharacterController } from './controllers/CharacterController.js';

class App {

	router = router

	// NOTE: this creates an app-wide controller for our user to access
	CharacterController = new CharacterController()

	init() {
		this.router.init(app)
	}

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
