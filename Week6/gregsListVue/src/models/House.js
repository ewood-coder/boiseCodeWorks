

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

const houseData = {
	"creator": {
		"_id": "6392586058e304c7b7199b3b",
		"name": "Otters Otters Otters",
		"picture": "https://images.unsplash.com/photo-1597378609416-47cc937b294c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
		"id": "6392586058e304c7b7199b3b"
	},
	"id": "6466b79bd716b57062d02112"
}