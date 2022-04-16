import qs from 'querystring'
import { fetchit } from './fetchit.js'
import { setFetch, setQueryString } from './modules.js'

setFetch(import('node-fetch').then(fetch => /** @type {*} */ (fetch.default || fetch)))
setQueryString(Promise.resolve(qs))

export * from './shared/json.cjs'
export * from './shared/text.cjs'
export { fetchit }
export default fetchit
