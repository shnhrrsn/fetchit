import { fetchfunc } from './types/fetch'
import { QueryString } from './types/querystring'

const storage = {
	fetch: <fetchfunc | undefined>undefined,
	qs: <QueryString | undefined>undefined,
}

export function getFetch(): fetchfunc {
	if (!storage.fetch) {
		throw new Error('fetch module not configured')
	}

	return storage.fetch
}

export function setFetch(fetch: fetchfunc) {
	storage.fetch = fetch
}

export function getQueryString(): QueryString {
	if (!storage.qs) {
		throw new Error('qs module not configured')
	}

	return storage.qs
}

export function setQueryString(qs: QueryString) {
	storage.qs = qs
}
