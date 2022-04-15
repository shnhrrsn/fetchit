import { qs } from './browser/qs'
import { fetchit } from './fetchit'
import { setFetch, setQueryString } from './modules'

setFetch(window.fetch.bind(window))
setQueryString(qs)

export { default as json } from './shared/json'
export { default as text } from './shared/text'
export default fetchit
