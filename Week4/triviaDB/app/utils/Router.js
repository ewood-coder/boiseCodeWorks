import { Pop } from "./Pop.js";

/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {Function[]} middleware
 * @typedef {Function[]} controller
 */

class Route {
  /**
   * 
   * @param {{path: string, middleware?:middleware[], controllers:controller[], view?: string, target?: string}} routeConfig 
   */
  constructor(routeConfig) {
    if (typeof routeConfig.path != 'string') {
      throw Pop.error('[ROUTE_ERROR::INVALID_ROUTE] No path was specified for route')
    }
    this.path = routeConfig.path
    this.target = routeConfig.target || '#router-view'
    this.middleware = routeConfig.middleware || []
    this.controllers = routeConfig.controllers || []
    this.view = routeConfig.view || ''
    this.template = ''
    this.loadTemplate()
  }

  async loadTemplate() {
    if (!this.view || !this.view.endsWith('.html') || this.template.startsWith('<')) {
      return ''
    }
    try {
      const res = await fetch(this.view)
      if (!res.ok) { throw new Error(res.statusText) }
      this.template = await res.text()
    } catch (error) {
      console.error(error)
      Pop.error('[ROUTE_ERROR::BAD_PATH] Unable to load template for route ' + this.path)
    }
  }
}


export class Router {
  /**@type {Route[]} */
  routes = []

  /**@type {Route} */
  fromRoute
  /**@type {Route} */
  currentRoute

  app = {}

  constructor(routeConfig) {
    this.routes = routeConfig.map(r => new Route(r))
  }

  init(app) {
    this.app = app
    window.addEventListener(
      "hashchange",
      () => this.handleRouteChange(),
      false
    );
    this.handleRouteChange()
  }

  async handleRouteChange() {
    const currentRoute = this.routes.find(r => r.path == location.hash)
    if (!currentRoute) {
      Pop.error('404 No Matching Route Found for ' + location.hash)
      return location.hash = this.currentRoute?.path || ''
    }
    this.fromRoute = this.currentRoute
    this.currentRoute = currentRoute

    this.handleMiddleware()
  }

  async handleMiddleware() {
    const currentRoute = this.currentRoute
    if (currentRoute.middleware.length == 0) {
      return this.handleView()
    }
    for (const i in currentRoute.middleware) {
      try {
        const fn = currentRoute.middleware[i]
        const next = currentRoute.middleware[i + 1] || this.handleView.bind(this)
        // @ts-ignore
        await fn(next)
      } catch (e) {
        return Pop.error('[ROUTE_ERROR::MIDDLEWARE_FAILURE] ' + e.message)
      }
    }
  }

  async handleView() {
    const currentRoute = this.currentRoute
    if (currentRoute.view) {
      await currentRoute.loadTemplate()
      let template = currentRoute.template || currentRoute.view
      const target = document.querySelector(currentRoute.target)
      if (!target) { throw new Error('Unable to mount view') }
      target.innerHTML = template
    }

    this.fromRoute?.controllers.forEach(c => {
      // @ts-ignore
      delete this.app[c.name]
    })
    currentRoute.controllers.forEach(c => {
      // @ts-ignore
      this.app[c.name] = new c()
    })

  }

}