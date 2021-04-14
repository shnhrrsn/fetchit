import { setFetch, setQueryString } from './modules'

import fetch from 'node-fetch'
import { fetchit } from './fetchit'
import qs from 'querystring'

setFetch(<any>fetch)
setQueryString(qs)

export { default as json } from './shared/json'
export { default as text } from './shared/text'
export default fetchit
