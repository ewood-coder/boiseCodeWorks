import { AccountController } from "./controllers/AccountController.js";
import { GiftsController } from "./controllers/GiftsController.js";
import { SandboxController } from "./controllers/SandboxController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
	{
		path: '',
		controllers: [GiftsController, SandboxController],
		view: 'app/views/GiftsView.html'
	},
	{
		path: '#/account',
		middleware: [AuthGuard],
		controllers: [AccountController],
		view: 'app/views/AccountView.html',
	}
])




