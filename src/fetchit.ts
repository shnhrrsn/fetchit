import { build } from './shared/build'
import { StatusCodeError } from './shared/StatusCodeError'
import { getFetch, getQueryString } from './modules'
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
	return fetchit(...args)
		.catch(function (error) {
			if (error.name !== 'StatusCodeError' || !error.response) {
				return Promise.reject(error)
			}

			try {
				return error.response.json().then((json: any) => {
					error.json = json
					return Promise.reject(error)
				})
			} catch (err2) {
				return Promise.reject(error)
			}
		})
		.then(response => response.json())
}

fetchit.text = function (...args) {
	return fetchit(...args)
		.catch(function (err) {
			if (err.name !== 'StatusCodeError' || !err.response) {
				return Promise.reject(err)
			}

			try {
				return err.response.text().then((text: any) => {
					err.text = text
					return Promise.reject(err)
				})
			} catch (err2) {
				return Promise.reject(err)
			}
		})
		.then(function (response) {
			return response.text()
		})
}
