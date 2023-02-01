const { default: test } = require('ava')
const { default: fetchit } = require('../src/fetchit.cjs')

test('fetchit json', async t => {
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})

test('fetchit text', async t => {
	const result = await fetchit.text('https://httpbin.org/robots.txt')
	t.is(typeof result, 'string')
	t.is(result.indexOf('User-agent'), 0)
})

test('fetchit error 400', async t => {
	try {
		await fetchit('https://httpbin.org/status/400')
		t.fail('expected error')
	} catch (err) {
		t.is(err.message, 'BAD REQUEST')
		t.is(err.status, 400)
		t.is(err.statusCode, 400)
		t.is(err.code, 400)
		t.is(err.uri, 'https://httpbin.org/status/400')
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')
	}
})
