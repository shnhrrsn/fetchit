import test from 'ava'
import querystring from 'querystring'
import { qs } from '../src/browser/qs.js'

const query = {
	date: Date.now().toString(),
	true: true,
	false: false,
	one: 1,
	zero: 0,
	string: 'string',
	array: ['a', 'b', 'c'],
}

test('with URLSearchParams', async t => {
	global.URLSearchParams = /** @type {*} */ (
		await import('@ungap/url-search-params').then(mod => mod.default)
	)
	t.is(querystring.stringify(query), qs.stringify(query))
})
