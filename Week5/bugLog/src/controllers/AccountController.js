import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { trackedBugsService } from '../services/TrackedBugsService.js'

export class AccountController extends BaseController {
	constructor () {
		super('account')
		this.router
			.use(Auth0Provider.getAuthorizedUserInfo)
			.get('/trackedBugs', this.getBugsYouAreTracking)
			.get('', this.getUserAccount)
			.put('', this.editUserAccount)
	}

	async getUserAccount(req, res, next) {
		try {
			const account = await accountService.getAccount(req.userInfo)
			res.send(account)
		} catch (error) {
			next(error)
		}
	}

	async editUserAccount(req, res, next) {
		try {
			const accountId = req.userInfo.id
			req.body.id = accountId
			const account = await accountService.updateAccount(req.userInfo, req.body)
			res.send(account)
		} catch (error) {
			next(error)
		}
	}

	async getBugsYouAreTracking(request, response, next) {
		try {
			const trackerId = request.userInfo.id
			const myTrackedBugs = await trackedBugsService.getBugsYouAreTracking(trackerId)
			response.send(myTrackedBugs)
		}
		catch (error) {
			next(error)
		}
	}

}
