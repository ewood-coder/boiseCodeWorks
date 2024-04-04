import { AuthController } from './controllers/AuthController.js';
import { router } from './router-config.js';

class App {

  AuthController = new AuthController()
  router = router
  init() {
    this.router.init(app)
  }

}


const app = new App()
app.init()
// @ts-ignore
window.app = app
