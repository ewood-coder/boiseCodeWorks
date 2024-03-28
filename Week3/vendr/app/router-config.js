import { SnacksController } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
	{
		path: '',
		controllers: [],
		view: /*html*/`
			<div class="bg-white p-3">
				<div class="card-body p-4">
				<p>Home Page</p>
				<h1> Welcome to Vendr</h1>
				<a href="#/snacks" class="btn pinkColor">Go To Menu</a>
				</div>
			</div>
		`
	},

	{
		path: '#/snacks',
		controllers: [SnacksController],
		view: 'app/views/SnacksView.html'
	},
])