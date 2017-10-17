const test = require('ava')
const fetch = require('../node.js')

test('json', async t => {
	const result = await fetch.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})

test('text', async t => {
	const result = await fetch.text('https://httpbin.org/robots.txt')
	t.is(typeof result, 'string')
	t.is(result.indexOf('User-agent'), 0)
})

test('query', async t => {
	const query = {
		date: Date.now().toString(),
		boolean: 'true',
		string: 'string'
	}

	const result = await fetch.json('https://httpbin.org/get', { query })
	t.deepEqual(result.args, query)
})

test('post json', async t => {
	const body = {
		date: Date.now(),
		boolean: true,
		string: 'string'
	}

	const result = await fetch.json('https://httpbin.org/post', {
		method: 'POST',
		body: body
	})

	t.deepEqual(result.json, body)
})

test('post json content type override', async t => {
	const body = {
		date: Date.now(),
		boolean: true,
		string: 'string'
	}
	const bodyString = body.toString()

	const result = await fetch.json('https://httpbin.org/post', {
		method: 'POST',
		body: body,
		headers: {
			'Content-Type': 'text/plain',
			'Content-Length': bodyString.length
		}
	})

	t.deepEqual(result.data, bodyString)
	t.is(bodyString, '[object Object]')
})

test('post form', async t => {
	const form = {
		date: Date.now().toString(),
		boolean: 'true',
		string: 'string'
	}

	const result = await fetch.json('https://httpbin.org/post', {
		method: 'POST',
		form: form
	})

	t.deepEqual(result.form, form)
})

test('post text', async t => {
	const body = `Time time is ${Date.now()}`

	const result = await fetch.json('https://httpbin.org/post', {
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain'
		},
		body: body
	})

	t.deepEqual(result.data, body)
})

test('error 400', async t => {
	try {
		await fetch('https://httpbin.org/status/400')
	} catch(err) {
		t.is(err.message, '400')
		t.is(err.status, 400)
		t.is(err.statusCode, 400)
		t.is(err.code, 400)
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')
	}
})

test('error 500', async t => {
	try {
		await fetch('https://httpbin.org/status/500')
	} catch(err) {
		t.is(err.message, '500')
		t.is(err.status, 500)
		t.is(err.statusCode, 500)
		t.is(err.code, 500)
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')
	}
})
