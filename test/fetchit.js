import test from 'ava'
import fetchit from '../src/node.js'

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

test('fetchit query', async t => {
	const query = {
		date: Date.now().toString(),
		boolean: 'true',
		string: 'string',
	}

	const result = await fetchit.json('https://httpbin.org/get', { query })
	t.deepEqual(result.args, query)
})

test('fetchit post json', async t => {
	const body = {
		date: Date.now(),
		boolean: true,
		string: 'string',
	}

	const result = await fetchit.json('https://httpbin.org/post', {
		method: 'POST',
		body: body,
	})

	t.deepEqual(result.json, body)
})

test('fetchit post json content type override', async t => {
	const body = {
		date: Date.now(),
		boolean: true,
		string: 'string',
	}
	const bodyString = body.toString()

	const result = await fetchit.json('https://httpbin.org/post', {
		method: 'POST',
		body: body,
		headers: {
			'Content-Type': 'text/plain',
			'Content-Length': bodyString.length.toString(),
		},
	})

	t.deepEqual(result.data, bodyString)
	t.is(bodyString, '[object Object]')
})

test('fetchit post form', async t => {
	const form = {
		date: Date.now().toString(),
		boolean: 'true',
		string: 'string',
	}

	const result = await fetchit.json('https://httpbin.org/post', {
		method: 'POST',
		form: form,
	})

	t.deepEqual(result.form, form)
})

test('fetchit post text', async t => {
	const body = 'Time time is ${Date.now()}'

	const result = await fetchit.json('https://httpbin.org/post', {
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain',
		},
		body: body,
	})

	t.deepEqual(result.data, body)
})

test('fetchit error 400', async t => {
	try {
		await fetchit('https://httpbin.org/status/400')
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

test('fetchit error 400 json', async t => {
	try {
		await fetchit.json('http://mockbin.org/status/400/BAD+REQUEST')
	} catch (err) {
		t.is(err.message, 'Bad Request')
		t.is(err.status, 400)
		t.is(err.statusCode, 400)
		t.is(err.code, 400)
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')

		t.is(typeof err.json, 'object')
		t.deepEqual(err.json, {
			code: '400',
			message: 'BAD REQUEST',
		})
	}
})

test('fetchit error 400 invalid json', async t => {
	try {
		await fetchit.json('https://httpbin.org/status/400')
	} catch (err) {
		t.is(err.message, 'BAD REQUEST')
		t.is(err.status, 400)
		t.is(err.statusCode, 400)
		t.is(err.code, 400)
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')
		t.is(err.json, undefined)
	}
})

test('fetchit error 400 text', async t => {
	try {
		await fetchit.text('http://mockbin.org/status/400/BAD+REQUEST')
	} catch (err) {
		t.is(err.message, 'Bad Request')
		t.is(err.status, 400)
		t.is(err.statusCode, 400)
		t.is(err.code, 400)
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')

		t.is(typeof err.text, 'string')
		t.is(
			err.text,
			JSON.stringify(
				{
					code: '400',
					message: 'BAD REQUEST',
				},
				null,
				2,
			),
		)
	}
})

test('fetchit error 500', async t => {
	try {
		await fetchit('https://httpbin.org/status/500')
	} catch (err) {
		t.is(err.message, 'INTERNAL SERVER ERROR')
		t.is(err.status, 500)
		t.is(err.statusCode, 500)
		t.is(err.code, 500)
		t.is(typeof err.response, 'object')
		t.is(err.name, 'StatusCodeError')
	}
})

test('fetchit error bad host json', async t => {
	try {
		await fetchit.json('https://thisis.notarealdomain/')
	} catch (err) {
		t.true(err.message.includes('ENOTFOUND'))
		t.is(err.status, undefined)
		t.is(err.statusCode, undefined)
		t.is(err.code, 'ENOTFOUND')
		t.is(err.response, undefined)
		t.is(err.name, 'FetchError')
		t.is(err.json, undefined)
	}
})
