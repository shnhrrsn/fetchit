import { fetchit } from './fetchit.js'
import { setFetch, setQueryString } from './modules.js'
import { qs } from './shared/qs.js'

setFetch(Promise.resolve(window.fetch.bind(window)))
setQueryString(Promise.resolve(qs))

export * from './shared/json.cjs'
export * from './shared/text.cjs'
export { fetchit }
export default fetchit
