import fetch from 'node-fetch'
import qs from 'querystring'
import { fetchit } from './fetchit.js'
import { setFetch, setQueryString } from './modules.js'

setFetch(/** @type {*} */ (fetch))
setQueryString(qs)

export { default as json } from './shared/json.js'
export { default as text } from './shared/text.js'
export default fetchit
