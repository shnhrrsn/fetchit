import fetch from 'node-fetch'
import { fetchit } from './fetchit.js'
import { setFetch, setQueryString } from './modules.js'
import { qs } from './shared/qs.js'

/** @typedef {import('./types/fetchit').FetchitRequestInit} FetchitRequestInit */
/** @typedef {import('./types/fetchit').FetchIt} FetchIt */

setFetch(Promise.resolve(/** @type {*} */ (fetch)))
setQueryString(Promise.resolve(qs))

export * from './shared/json.cjs'
export * from './shared/text.cjs'
export { fetchit }
export default fetchit
