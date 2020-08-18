import { QueryString } from '../types/querystring'
import { ParsedUrlQueryInput } from 'querystring'

function stringifyWithURLSearchParams(object: ParsedUrlQueryInput) {
	const params = new URLSearchParams()

	for (const key in object) {
		const value = object[key]

		if (Array.isArray(value)) {
			for (const v of value) {
				params.append(key, v)
			}
		} else if (value === undefined || value === null) {
			params.set(key, '')
		} else if (value === false) {
			params.set(key, 'false')
		} else if (value === 0) {
			params.set(key, '0')
		} else {
			params.set(key, (value || '').toString())
		}
	}

	return params.toString()
}

function stringifyFallback(object: ParsedUrlQueryInput) {
	const queryString = []

	for (const key in object) {
		const value = object[key]

		if (Array.isArray(value)) {
			for (const v of value) {
				queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(v))
			}
		} else {
			queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(<any>value))
		}
	}

	return queryString.join('&')
}

export const qs: QueryString = {
	stringify(object: ParsedUrlQueryInput): string {
		if (!object) {
			return ''
		}

		if (typeof URLSearchParams === 'undefined') {
			return stringifyFallback(object)
		}

		return stringifyWithURLSearchParams(object)
	},
}
