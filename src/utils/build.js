import { qs } from './qs.js'

/**
 * @param {string} uri
 * @param {import('../fetchit.js').FetchitRequestInit} options
 * @returns {[string, import('../fetchit.js').FetchitRequestInit]}
 */
export function build(uri, options) {
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

/**
 *
 * @param {import('../fetchit.js').QueryString} qs
 * @param {import('../fetchit.js').FetchitRequestInit} options
 * @returns
 */
function buildBody(qs, options) {
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

/**
 * @param {import('../fetchit.js').FetchitRequestInit} options
 * @param {string} key
 * @param {string} value
 */
function addHeader(options, key, value) {
	if (Array.isArray(options.headers)) {
		options.headers.push([key, value])
	} else if (
		!!options.headers &&
		!!options.headers.constructor &&
		options.headers.constructor.name === 'Headers'
	) {
		const headers = /** @type {Headers} */ (options.headers)
		headers.set(key, value)
	} else {
		/* c8 ignore next 3 */
		if (!options.headers) {
			options.headers = {}
		}

		const headers = /** @type {*} */ (options.headers)
		headers[key] = value
	}
}

/**
 * @param {import('../fetchit.js').FetchitRequestInit} options
 * @param {string} key
 * @returns {boolean}
 */
function hasHeader(options, key) {
	/* c8 ignore next 2 */
	if (!options.headers) {
		return false
	} else if (Array.isArray(options.headers)) {
		key = key.toUpperCase()
		return options.headers.filter(([otherKey]) => otherKey.toUpperCase() === key).length > 0
	} else if (
		!!options.headers &&
		!!options.headers.constructor &&
		options.headers.constructor.name === 'Headers'
	) {
		return /** @type {Headers} */ (options.headers).has(key)
	}

	return key in options.headers ? true : false
}
