
import { Router } from "./utils/Router.js";


export const router = new Router([
	{
		path: '',
		controllers: [TriviasController],
		view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
	},
	{
		path: '#/about',
		view: 'app/views/AboutView.html'
	}
])