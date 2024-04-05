

export class Gift {

	constructor (data) {
		this.id = data.id
		this.tag = data.tag
		this.url = data.url
		this.opened = data.opened
		this.creatorId = data.creatorId
		this.profileIdsOpened = data.profileIdsOpened
	}


	get GiftTemplate() {
		return `
		<div class="card col-3 m-3" onclick="app.GiftsController.openGift('${this.id}')">
			<img class="p-4" src="${this.url}" alt="image of giftbox">
			<div class="container">
				<h4><b>${this.tag}</b></h4>
			</div>
		</div>
		`
	}

}