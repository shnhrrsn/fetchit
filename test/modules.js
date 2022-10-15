import test from 'ava'
import * as modules from '../src/modules.js'

test.beforeEach(t => {
	modules.setFetch(undefined)
	modules.setQueryString(undefined)
})

test.serial('getFetch throws error', t => {
	t.throws(() => modules.getFetch(), {
		message: 'fetch module not configured',
	})
})

test.serial('getQueryString throws error', t => {
	t.throws(() => modules.getQueryString(), {
		message: 'qs module not configured',
	})
})

test.serial('setFetch', async t => {
	const fetch = () => {}
	modules.setFetch(fetch)
	t.is(await modules.getFetch(), fetch)
})

test.serial('setQueryString', async t => {
	const qs = () => {}
	modules.setQueryString(qs)
	t.is(await modules.getQueryString(), qs)
})
