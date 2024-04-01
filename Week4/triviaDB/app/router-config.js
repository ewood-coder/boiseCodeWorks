import { TriviasController } from "./controllers/TriviasController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
	{
		path: '',
		controllers: [TriviasController],
		view: 'app/views/TriviaView.html'
	},
])