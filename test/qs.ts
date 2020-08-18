import { qs } from '../src/browser/qs'
import querystring from 'querystring'
import test from 'ava'

const query = {
	date: Date.now().toString(),
	true: true,
	false: false,
	one: 1,
	zero: 0,
	string: 'string',
	array: ['a', 'b', 'c'],
}

test('with URLSearchParams', async (t: any) => {
	global.URLSearchParams = require('@ungap/url-search-params')
	t.is(querystring.stringify(query), qs.stringify(query))
})

test('without URLSearchParams', async (t: any) => {
	delete global.URLSearchParams
	t.is(querystring.stringify(query), qs.stringify(query))
})
