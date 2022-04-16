import { qs } from './browser/qs.js'
import { fetchit } from './fetchit.js'
import { setFetch, setQueryString } from './modules.js'

setFetch(Promise.resolve(window.fetch.bind(window)))
setQueryString(Promise.resolve(qs))

export * from './shared/json.cjs'
export * from './shared/text.cjs'
export { fetchit }
export default fetchit
