const { json } = require('../shared/json.cjs')
const { text } = require('../shared/text.cjs')
const qs = require('querystring')

const $fetchit = import('../modules.js').then(modules => {
	modules.setFetch(import('node-fetch').then(fetch => /** @type {*} */ (fetch.default ?? fetch)))
	modules.setQueryString(Promise.resolve(qs))
	return import('../fetchit.js')
})

/** @type {import('../types/fetchit').FetchIt} */
const fetchit = function fetchit(uri, options = undefined) {
	return $fetchit.then(({ fetchit }) => fetchit(uri, options))
}

fetchit.json = function (...args) {
	return json(fetchit(...args))
}

fetchit.text = function (...args) {
	return text(fetchit(...args))
}

exports.default = fetchit
exports.fetchit = fetchit
exports.json = json
exports.text = text
