import { StatusCodeError } from './errors.js'
import { build } from './utils/build.js'
import { json } from './utils/json.cjs'
import { text } from './utils/text.cjs'

/**
 * @typedef {{ (url: RequestInfo, init?: RequestInit): Promise<Response> }} fetchfunc
 *
 * @typedef {{
 * 	(uri: string, options?: FetchitRequestInit): Promise<Response>
 * 	json(uri: string, options?: FetchitRequestInit): Promise<any>
 * 	text(uri: string, options?: FetchitRequestInit): Promise<string>
 * }} FetchIt
 *
 * @typedef {RequestInit & {
 * 	query?: QueryStringInput
 * 	form?: QueryStringInput
 * 	body?: any
 * }} FetchitRequestInit
 *
 * @typedef {URLSearchParams | Record<string, string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null>} QueryStringInput
 * @typedef {{ stringify(obj?: QueryStringInput): string }} QueryString
 */

/** @type {FetchIt} */
export const fetchit = async function fetchit(uri, options = undefined) {
	try {
		options = options ?? {}
		;[uri, options] = build(uri, options)

		return fetch(uri, options)
			.then(function (response) {
				if (!response.ok) {
					const error = new StatusCodeError(
						response.status,
						(response.statusText ?? response.status ?? 'Fetch Error').toString(),
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

export default fetchit
export { json, text }

fetchit.json = function (...args) {
	return json(fetchit(...args))
}

fetchit.text = function (...args) {
	return text(fetchit(...args))
}
