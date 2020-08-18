import { StatusCodeError } from '../src/shared/StatusCodeError'
import test from 'ava'

test('status', (t: any) => {
	const error = new StatusCodeError(500)
	t.is(error.message, '500')
	t.is(error.status, 500)
	t.is(error.code, 500)
	t.is(error.statusCode, 500)
})

test('custom message', (t: any) => {
	const error = new StatusCodeError(500, 'Internal Server Error')
	t.is(error.message, 'Internal Server Error')
	t.is(error.status, 500)
})

test('name', (t: any) => {
	const error = new StatusCodeError(500)
	t.is(error.name, 'StatusCodeError')
})

test('instanceof', (t: any) => {
	const error = new StatusCodeError(500)
	t.true(error instanceof StatusCodeError)
	t.true(error instanceof Error)
})
