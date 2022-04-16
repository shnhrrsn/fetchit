import { qs } from './browser/qs.js'
import { fetchit } from './fetchit.js'
import { setFetch, setQueryString } from './modules.js'

setFetch(window.fetch.bind(window))
setQueryString(qs)

export { default as json } from './shared/json.js'
export { default as text } from './shared/text.js'
export default fetchit
