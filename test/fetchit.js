const test = require('ava')

function configure(fetch) {
	fetch.fetch = require('node-fetch')
	fetch.qs = require('querystring')
	return fetch
}

for(const variant of [ 'fetchit', 'fetchit-async' ]) {
	const fetch = configure(require(`../src/${variant}`))

	test(`${variant} json`, async t => {
		const result = await fetch.json('https://httpbin.org/anything')
		t.is(typeof result, 'object')
		t.is(result.method, 'GET')
	})

	test(`${variant} text`, async t => {
		const result = await fetch.text('https://httpbin.org/robots.txt')
		t.is(typeof result, 'string')
		t.is(result.indexOf('User-agent'), 0)
	})

	test(`${variant} query`, async t => {
		const query = {
			date: Date.now().toString(),
			boolean: 'true',
			string: 'string'
		}

		const result = await fetch.json('https://httpbin.org/get', { query })
		t.deepEqual(result.args, query)
	})

	test(`${variant} post json`, async t => {
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

	test(`${variant} post json content type override`, async t => {
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

	test(`${variant} post form`, async t => {
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

	test(`${variant} post text`, async t => {
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

	test(`${variant} error 400`, async t => {
		try {
			await fetch('https://httpbin.org/status/400')
		} catch(err) {
			t.is(err.message, 'BAD REQUEST')
			t.is(err.status, 400)
			t.is(err.statusCode, 400)
			t.is(err.code, 400)
			t.is(err.uri, 'https://httpbin.org/status/400')
			t.is(typeof err.response, 'object')
			t.is(err.name, 'StatusCodeError')
		}
	})

	test(`${variant} error 400 json`, async t => {
		try {
			await fetch.json('http://mockbin.org/status/400/BAD+REQUEST')
		} catch(err) {
			t.is(err.message, 'BAD REQUEST')
			t.is(err.status, 400)
			t.is(err.statusCode, 400)
			t.is(err.code, 400)
			t.is(typeof err.response, 'object')
			t.is(err.name, 'StatusCodeError')

			t.is(typeof err.json, 'object')
			t.deepEqual(err.json, {
				code: '400',
				message: 'BAD REQUEST'
			})
		}
	})

	test(`${variant} error 400 text`, async t => {
		try {
			await fetch.text('http://mockbin.org/status/400/BAD+REQUEST')
		} catch(err) {
			t.is(err.message, 'BAD REQUEST')
			t.is(err.status, 400)
			t.is(err.statusCode, 400)
			t.is(err.code, 400)
			t.is(typeof err.response, 'object')
			t.is(err.name, 'StatusCodeError')

			t.is(typeof err.text, 'string')
			t.is(err.text, JSON.stringify({
				code: '400',
				message: 'BAD REQUEST'
			}, null, 2))
		}
	})

	test(`${variant} error 500`, async t => {
		try {
			await fetch('https://httpbin.org/status/500')
		} catch(err) {
			t.is(err.message, 'INTERNAL SERVER ERROR')
			t.is(err.status, 500)
			t.is(err.statusCode, 500)
			t.is(err.code, 500)
			t.is(typeof err.response, 'object')
			t.is(err.name, 'StatusCodeError')
		}
	})
}
