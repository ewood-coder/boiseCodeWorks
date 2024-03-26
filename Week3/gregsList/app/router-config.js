import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HousesController } from "./controllers/HousesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
	{
		path: '',
		controllers: [],
		view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
        <h1> Welcome to Gregslist</h1>
        <a href="#/cars" class="btn btn-outline-success">🚗 Buy a car!</a>
      </div>
    </div>
    `
	},
	{
		path: '#/cars',
		controllers: [CarsController],
		view: 'app/views/CarsView.html'
		// Replaced by 'view' file
		// view: /*html*/`
		// <div class="bg-white p-3">
		//   <div class="card-body">
		//     <p>Cars Page</p>
		//     <h1> Wanna buy a car?</h1>
		//   </div>
		// </div>
		// <section class="container">
		//   <div class="row" id="cars-list">

		//   </div>
		// </section>
		// `
	},
	{
		path: '#/about',
		view: 'app/views/AboutView.html'
	},
	{
		path: '#/houses',
		controllers: [HousesController],
		view: 'app/views/HousesView.html'
	},
	{
		path: '#/jobs',
		view: 'app/views/JobsView.html'
	},

])