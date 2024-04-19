
import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class BlogsService {

	async destroyBlog(blogId) {
		const response = await api.delete(`api/blogs/${blogId}`)
		logger.log('DESTROYED BLOG 💥🧨💣', response.data)

		const blogs = AppState.blogs

		const blogIndex = blogs.findIndex(blog => blog.id == blogId)
		// AppState.blogs = blogs.filter(blog => blog.id != blogId)

		if (blogIndex == -1) throw new Error("You messed on findIndex, big dawg")

		blogs.splice(blogIndex, 1)
		AppState.blogs = blogs
	}

	async createBlog(blogData) {
		const response = await api.post('api/blogs', blogData)
		logger.log('CREATED BLOG ✈️🔧', response.data)
		const newBlog = new Blog(response.data)
		// unshift if data is sorted newest to oldest
		AppState.blogs.unshift(newBlog)
		// push if data is sorted oldest to newest
		// AppState.blogs.push(newBlog)
	}

	async getBlogs() {
		const response = await api.get('api/blogs')
		// NOTE logger is similar to console, will not break your application during deployment
		logger.log('GOT BLOGS ✈️', response.data);

		AppState.blogs = response.data.map(pojo => new Blog(pojo))
	}

	async getProfileBlogs(profileId) {
		AppState.profileBlogs = []
		const response = await api.get(`api/blogs?creatorId=${profileId}`)
		console.log('🧑‍🎨🖼️', response.data)
		const blogs = response.data.map(blog => new Blog(blog))

		AppState.profileBlogs = blogs
	}
}

export const blogsService = new BlogsService()