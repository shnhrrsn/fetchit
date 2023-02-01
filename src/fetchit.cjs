const { json } = require('./utils/json.cjs')
const { text } = require('./utils/text.cjs')

const $fetchit = import('./fetchit.js')

/** @type {import('./fetchit.js').FetchIt} */
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
