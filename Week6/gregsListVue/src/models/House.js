

export class House {
	constructor (data) {
		this.id = data.id
		this.bedrooms = data.bedrooms
		this.bathrooms = parseFloat(data.bathrooms)
		this.imgUrl = data.imgUrl
		this.levels = data.levels
		this.price = data.price
		this.year = data.year
		this.description = data.description
		this.creatorId = data.creatorId
		this.createdAt = new Date(data.createdAt)
		this.updatedAt = new Date(data.updatedAt)
		this.creator = data.creator
	}
}