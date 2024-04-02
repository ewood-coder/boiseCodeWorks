export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.nickname = data.nickname
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }

  get AccountCardTemplate() {
    return /*html*/`
    <div class="account-details text-center mb-2">
        <img class="rounded-circle profile-picture" src="${this.picture}" alt="${this.name}">
        <p class="fs-3"> <i class="mdi mdi-account"></i> <b>${this.displayName}</b></p>
    </div>
    `
  }

  get AccountFormTemplate() {
    return /*html*/`
    <form onsubmit="app.AccountController.updateAccount()">
      <div class="text-start">
        <div>
          <label for="name">Name:</label>
          <input type="text" class="form-control" required name="name" value="${this.name}">
        </div>
        <div>
          <label for="picture">Picture:</label>
          <input type="url" class="form-control" required name="picture" placeholder="picture" value="${this.picture}">
        </div>
        <div>
          <button type="submit" class="btn btn-primary w-100 mt-2">Update Account</button>
        </div>
      </div>
    </form>
    `
  }

  get displayName() {
    return this.nickname || this.name
  }
}