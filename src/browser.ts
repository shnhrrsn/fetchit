import { setFetch, setQueryString } from './modules'

import { fetchit } from './fetchit'
import { qs } from './browser/qs'

setFetch(window.fetch.bind(window))
setQueryString(qs)

export default fetchit
