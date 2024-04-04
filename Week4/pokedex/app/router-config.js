import { AccountController } from "./controllers/AccountController.js";
import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js";
import { WildPokemonsController } from "./controllers/WildPokemonsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";



export const router = new Router([
	{
		path: '',
		controllers: [WildPokemonsController, SandboxPokemonsController],
		view: 'app/views/PokemonsView.html'
	},
	{
		path: '#/account',
		middleware: [AuthGuard],
		controllers: [AccountController],
		view: 'app/views/AccountView.html',
	}
])




