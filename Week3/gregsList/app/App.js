import { router } from './router-config.js';

class App {

  router = router

  // Controllers added here, are mounted 'app wide', not 'per view'
  // NOTE the Router, uses the router-config to 'mount' and 'unmount' views and controllers appropriately based on the URL path of your site.
  // NO NEED TO ADD ANYTHING HERE ANYMORE

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
