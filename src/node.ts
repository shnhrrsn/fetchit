import fetch from 'node-fetch'
import qs from 'querystring'
import { fetchit } from './fetchit'
import { setFetch, setQueryString } from './modules'

setFetch(<any>fetch)
setQueryString(qs)

export { default as json } from './shared/json'
export { default as text } from './shared/text'
export default fetchit
