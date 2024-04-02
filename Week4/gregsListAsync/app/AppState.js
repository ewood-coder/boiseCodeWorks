import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // NOTE the user and account are for auth purposes, so leave these be
  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  //-------------------

  /** @type {Car[]} */
  cars = []
}

export const AppState = createObservableProxy(new ObservableAppState())