import test from 'ava'
import { fetchit } from '../src/fetchit.js'
import { setFetch, setQueryString } from '../src/modules.js'

setQueryString(import('querystring'))

test.serial('node-fetch1', async t => {
	setFetch(import('node-fetch1').then(fetch => /** @type {*} */ (fetch.default)))
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})

test.serial('node-fetch2', async t => {
	setFetch(import('node-fetch2').then(fetch => /** @type {*} */ (fetch.default)))
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})

test.serial('node-fetch3', async t => {
	setFetch(import('node-fetch3').then(fetch => /** @type {*} */ (fetch.default)))
	const result = await fetchit.json('https://httpbin.org/anything')
	t.is(typeof result, 'object')
	t.is(result.method, 'GET')
})
