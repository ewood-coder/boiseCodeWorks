

export class Car {
	constructor (data) {
		this.id = data.id
		this.imgUrl = data.imgUrl
		this.make = data.make
		this.model = data.model
		this.price = data.price
		this.year = data.year
		this.description = data.description
		this.engineType = data.engineType
		this.creatorId = data.creatorId
		this.createdAt = new Date(data.createdAt)
		this.updatedAt = new Date(data.updatedAt)
		this.creator = data.creator
	}
}



// NOTE: THIS DOES NOTHING, JUST USED AS REFERENCE FOR ABOVE
const carData = {
	"_id": "6466b79bd716b57062d02112",
	"make": "Masda",
	"model": "Miada",
	"year": 1920,
	"price": 1000000,
	"description": "fdjskhfdasjkhfajkl",
	"engineType": "unknown",
	"creatorId": "6392586058e304c7b7199b3b",
	"createdAt": "2023-05-18T23:41:15.815Z",
	"updatedAt": "2023-05-18T23:41:15.815Z",
	"__v": 0,
	"creator": {
		"_id": "6392586058e304c7b7199b3b",
		"name": "Otters Otters Otters",
		"picture": "https://images.unsplash.com/photo-1597378609416-47cc937b294c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
		"id": "6392586058e304c7b7199b3b"
	},
	"id": "6466b79bd716b57062d02112"
}