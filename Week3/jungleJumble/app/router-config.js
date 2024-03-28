import { JumblesController } from "./controllers/JumblesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([

	{
		path: '',
		controllers: [JumblesController],
		view: 'app/views/HomeView.html'
	}
])