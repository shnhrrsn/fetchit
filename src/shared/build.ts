import { FetchitRequestInit } from '../types/fetchit'
import { QueryString } from '../types/querystring'

export function build(
	qs: QueryString,
	uri: string,
	options: FetchitRequestInit,
): [string, FetchitRequestInit] {
	if (!options.credentials) {
		options.credentials = 'same-origin'
	}

	if (!options.headers) {
		options.headers = {}
	}

	if (typeof window !== 'undefined') {
		addHeader(options, 'X-Requested-With', 'XMLHttpRequest')
	}

	buildBody(qs, options)

	if (options.query) {
		if (uri.indexOf('?') >= 0) {
			uri += '&'
		} else {
			uri += '?'
		}

		uri += qs.stringify(options.query)
		delete options.query
	}

	return [uri, options]
}

function buildBody(qs: QueryString, options: FetchitRequestInit) {
	if (options.form) {
		options.body = qs.stringify(options.form)
		addHeader(options, 'Content-Type', 'application/x-www-form-urlencoded')
		delete options.form
	} else {
		if (!options.body || typeof options.body !== 'object') {
			return
		}

		if (hasHeader(options, 'Content-Type') || hasHeader(options, 'content-type')) {
			return
		}

		if (!!options.body.constructor && options.body.constructor.name === 'FormData') {
			return
		}

		options.body = JSON.stringify(options.body)
		addHeader(options, 'Content-Type', 'application/json')
	}
}

function addHeader(options: FetchitRequestInit, key: string, value: string) {
	if (Array.isArray(options.headers)) {
		options.headers.push([key, value])
	} else {
		;(<any>options.headers)[key] = value
	}
}

function hasHeader(options: FetchitRequestInit, key: string): boolean {
	if (!options.headers) {
		return false
	} else if (!Array.isArray(options.headers)) {
		return (<any>options.headers)[key] ? true : false
	}

	key = key.toUpperCase()
	return options.headers.filter(([otherKey]) => otherKey.toUpperCase() === key).length > 0
}
