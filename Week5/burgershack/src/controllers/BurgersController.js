import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
	constructor () {
		super('api/burgers');
		this.router
		//...
	}
}