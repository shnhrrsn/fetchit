import { getFetch, getQueryString } from './modules'
import { build } from './shared/build'
import json from './shared/json'
import { StatusCodeError } from './shared/StatusCodeError'
import text from './shared/text'
import { FetchIt, FetchitRequestInit } from './types/fetchit'

export const fetchit = <FetchIt>(
	function fetchit(uri: string, options?: FetchitRequestInit): Promise<Response> {
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
		} catch (err) {
			err.uri = uri
			err.options = options
			return Promise.reject(err)
		}
	}
)

fetchit.json = function (...args) {
	return json(fetchit(...args))
}

fetchit.text = function (...args) {
	return text(fetchit(...args))
}
