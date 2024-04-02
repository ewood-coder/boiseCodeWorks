import { AccountController } from "./controllers/AccountController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JobsController } from "./controllers/JobsController.js";
import { HousesController } from "./controllers/HousesController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";




export const router = new Router([
	{
		path: '',
		controllers: [HomeController],
		view: /*html*/`
    <div class="bg-white p-3 text-center">
      <div class="card-body p-3">
      	<h1 class="mb-4">Welcome to GregsList ASYNC</h1>
      	<button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
	},
	{
		path: '#/about',
		view: 'app/views/AboutView.html'
	},
	{
		path: '#/cars',
		controllers: [CarsController],
		view: 'app/views/CarsView.html'
	},
	{
		path: '#/houses',
		controllers: [HousesController],
		view: 'app/views/HousesView.html'
	},
	{
		path: '#/jobs',
		controllers: [JobsController],
		view: 'app/views/JobsView.html'
	},
	{
		path: '#/account',
		middleware: [AuthGuard],
		controllers: [AccountController],
		view: 'app/views/AccountView.html',
	}
])




