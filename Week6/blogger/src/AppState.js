import { reactive } from 'vue'
import { Blog } from './models/Blog.js'
import { Profile } from './models/Profile.js'



// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
	/** @type {{name, picture, id}} user info from Auth0*/
	user: null,
	/** @type {import('./models/Account.js').Account} user info from the database*/
	account: null,

	/** @type {Blog[]} */
	blogs: [],

	/** @type {Profile} */
	activeProfile: null,

	/** @type {Blog[]} */
	profileBlogs: []
})
