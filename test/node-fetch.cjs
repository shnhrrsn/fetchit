const { default: test } = require('ava')

test.serial('node-fetch1', async t => {
	const { setFetch, setQueryString } = await import('../src/modules.js')
	setQueryString(import('querystring'))
	setFetch(import('node-fetch1').then(fetch => /** @type {*} */ (fetch.default)))
	const { fetchit } = await import('../src/fetchit.js')
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})

test.serial('node-fetch2', async t => {
	const { setFetch, setQueryString } = await import('../src/modules.js')
	setQueryString(import('querystring'))
	setFetch(import('node-fetch2').then(fetch => /** @type {*} */ (fetch.default)))
	const { fetchit } = await import('../src/fetchit.js')
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})

test.serial('node-fetch3', async t => {
	const { setFetch, setQueryString } = await import('../src/modules.js')
	setQueryString(import('querystring'))
	setFetch(import('node-fetch3').then(fetch => /** @type {*} */ (fetch.default)))
	const { fetchit } = await import('../src/fetchit.js')
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})
