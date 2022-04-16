import { getFetch, getQueryString } from './modules.js'
import { build } from './shared/build.js'
import json from './shared/json.js'
import { StatusCodeError } from './shared/StatusCodeError.js'
import text from './shared/text.js'

/** @type {import('./types/fetchit').FetchIt} */
export const fetchit = function fetchit(uri, options = undefined) {
	try {
		const fetch = getFetch()
		const qs = getQueryString()
		options = options ?? {}
		;[uri, options] = build(qs, uri, options)

		return fetch(uri, options)
			.then(function (response) {
				if (!response.ok) {
					const error = new StatusCodeError(
						response.status,
						(response.statusText || response.status || 'Fetch Error').toString(),
					)
					error.response = response
					throw error
				}

				return response
			})
			.catch(function (err) {
				err.uri = uri
				err.options = options
				throw err
			})
	} catch (/** @type {*} */ err) {
		err.uri = uri
		err.options = options
		return Promise.reject(err)
	}
}

fetchit.json = function (...args) {
	return json(fetchit(...args))
}

fetchit.text = function (...args) {
	return text(fetchit(...args))
}
