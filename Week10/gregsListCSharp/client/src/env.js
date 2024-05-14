export const dev = window.location.origin.includes('localhost')

// NOTE don't forget to change your baseURL if using the dotnet template
export const baseURL = dev ? 'https://localhost:7045' : ''
export const useSockets = false

// TODO change these variables out to your own auth after cloning!
export const domain = 'dev-r74wuaxpejvz04an.us.auth0.com'
export const clientId = 'syO08A97sLrkuBY9Sl00CNYQxzR4XEPW'
export const audience = 'https://ewoodAPI.com'