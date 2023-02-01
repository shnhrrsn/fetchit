import test from 'ava'
import querystring from 'querystring'
import { qs } from '../src/utils/qs.js'

const query = {
	date: Date.now().toString(),
	true: true,
	false: false,
	one: 1,
	zero: 0,
	string: 'string',
	array: ['a', 'b', 'c'],
	null: null,
	undefined: undefined,
	zero_string: '0',
	blank_string: '',
}

test('with URLSearchParams', async t => {
	t.is(querystring.stringify(query), qs.stringify(query))
})

test('undefined', t => {
	t.is(qs.stringify(undefined), '')
})

test('URLSearchParams', t => {
	const params = new URLSearchParams()
	params.set('a', 'b')
	t.is(qs.stringify(params), params.toString())
})
