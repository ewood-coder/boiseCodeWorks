

export class Blog {
	constructor (data) {
		this.id = data.id
		this.title = data.title
		this.body = data.body
		this.imgUrl = data.imgUrl

		this.createdAt = new Date(data.createdAt)
		this.updatedAt = new Date(data.updatedAt)
		this.creator = data.creator
		this.creatorId = data.creatorId

		// --------------------------------------------
		// NOTE: I don't know if we'll need these
		this.tags = data.tags
		this.published = data.published
		// --------------------------------------------
	}
}

