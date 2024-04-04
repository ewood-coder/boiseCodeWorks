

export class Gift {

	constructor (data) {
		this.tag = data.tag
		this.gifUrl = data.url
		this.opened = data.opened
		this.creatorId = data.creatorId
		this.profileIdsOpened = data.profileIdsOpened
	}

}