const storage = {
	fetch: /** @type {Promise<import('./fetchit.js').fetchfunc> | undefined} */ (undefined),
	qs: /** @type {Promise<import('./fetchit.js').QueryString> | undefined} */ (undefined),
}

/**
 * @returns {Promise<import('./fetchit.js').fetchfunc>}
 */
export function getFetch() {
	if (!storage.fetch) {
		throw new Error('fetch module not configured')
	}

	return storage.fetch
}

/**
 * @param {Promise<import('./fetchit.js').fetchfunc>} fetch
 */
export function setFetch(fetch) {
	storage.fetch = fetch
}

/**
 * @returns {Promise<import('./fetchit.js').QueryString>}
 */
export function getQueryString() {
	if (!storage.qs) {
		throw new Error('qs module not configured')
	}

	return storage.qs
}

/**
 * @param {Promise<import('./fetchit.js').QueryString>} qs
 */
export function setQueryString(qs) {
	storage.qs = qs
}
