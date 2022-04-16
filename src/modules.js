const storage = {
	fetch: /** @type {Promise<import('./types/fetch').fetchfunc> | undefined} */ (undefined),
	qs: /** @type {Promise<import('./types/querystring').QueryString> | undefined} */ (undefined),
}

/**
 * @returns {Promise<import('./types/fetch').fetchfunc>}
 */
export function getFetch() {
	if (!storage.fetch) {
		throw new Error('fetch module not configured')
	}

	return storage.fetch
}

/**
 * @param {Promise<import('./types/fetch').fetchfunc>} fetch
 */
export function setFetch(fetch) {
	storage.fetch = fetch
}

/**
 * @returns {Promise<import('./types/querystring').QueryString>}
 */
export function getQueryString() {
	if (!storage.qs) {
		throw new Error('qs module not configured')
	}

	return storage.qs
}

/**
 * @param {Promise<import('./types/querystring').QueryString>} qs
 */
export function setQueryString(qs) {
	storage.qs = qs
}
