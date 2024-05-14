export const dev = window.location.origin.includes('localhost')

// NOTE don't forget to change your baseURL if using the dotnet template
export const baseURL = dev ? 'https://localhost:7045' : ''
export const useSockets = false

// TODO change these variables out to your own auth after cloning!
export const domain = 'dev-h63x8ohlbl1q2qkp.us.auth0.com'
export const clientId = 'XX15k7a9Be1KE1Usl1aaOrDdzKJwvtUp'
export const audience = 'https://jeremyisaraddude.com'