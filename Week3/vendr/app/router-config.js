import { SnacksController } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
	{
		path: '',
		controllers: [SnacksController],
		view: '/boiseCodeWorks/Week3/vendr/'
	},
])