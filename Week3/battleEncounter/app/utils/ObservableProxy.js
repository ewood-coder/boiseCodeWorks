import { EventEmitter } from "./EventEmitter.js"

/**
 * @template {EventEmitter} T 
 * @param {T} observable - An EventEmitter instance
 * @return {T}
 */
export function createObservableProxy(observable) {
  return new Proxy(observable, proxyHandler())

  function proxyHandler() {
    return {
      get(target, prop) {
        if (typeof prop == 'string' && prop.startsWith('_')) return target[prop]
        if (target[prop] instanceof Object && !target[prop].__prop_name__ && !(target[prop] instanceof Date)) {
          target[prop].__prop_name__ = prop
          target[prop] = new Proxy(target[prop], proxyHandler())
        }
        return target[prop];
      },
      set(target, prop, value) {
        target[prop] = value
        handleEmit(target, prop, value)
        return true;
      },
      deleteProperty(target, prop) {
        delete target[prop];
        handleEmit(target, prop)
        return true;
      }
    }
  }

  function handleEmit(target, prop, value) {
    if ((Array.isArray(target) && prop != 'length')) {
      return
    }
    observable.emit
      ? observable.emit(target.__prop_name__ || prop, value)
      : null
  }
}
