const storage = {
	fetch: /** @type {import('./types/fetch').fetchfunc | undefined} */ (undefined),
	qs: /** @type {import('./types/querystring').QueryString | undefined} */ (undefined),
}

/**
 * @returns {import('./types/fetch').fetchfunc}
 */
export function getFetch() {
	if (!storage.fetch) {
		throw new Error('fetch module not configured')
	}

	return storage.fetch
}

/**
 * @param {import('./types/fetch').fetchfunc} fetch
 */
export function setFetch(fetch) {
	storage.fetch = fetch
}

/**
 * @returns {import('./types/querystring').QueryString}
 */
export function getQueryString() {
	if (!storage.qs) {
		throw new Error('qs module not configured')
	}

	return storage.qs
}

/**
 * @param {import('./types/querystring').QueryString} qs
 */
export function setQueryString(qs) {
	storage.qs = qs
}
