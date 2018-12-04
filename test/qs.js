const test = require('ava')
const qs = require('../src/browser/qs')
const querystring = require('querystring')

const query = {
	date: Date.now().toString(),
	true: true,
	false: false,
	one: 1,
	zero: 0,
	string: 'string',
	array: [ 'a', 'b', 'c' ]
}

test('with URLSearchParams', async t => {
	global.URLSearchParams = require('@ungap/url-search-params')
	t.is(querystring.stringify(query), qs.stringify(query))
})

test('without URLSearchParams', async t => {
	global.URLSearchParams = undefined
	t.is(querystring.stringify(query), qs.stringify(query))
})
