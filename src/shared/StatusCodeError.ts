export declare class StatusCodeError extends Error {
	name: string
	message: string
	stack?: string
	status: number
	statusCode: number
	code: number
	response?: Response

	constructor(status: number, message?: string)
}

export function StatusCodeError(this: StatusCodeError, status: number, message?: string) {
	const instance = <any>new Error((message || status).toString())
	instance.status = status
	instance.statusCode = status
	instance.code = status

	Object.setPrototypeOf(instance, Object.getPrototypeOf(this))

	if (typeof Error.captureStackTrace === 'function') {
		Error.captureStackTrace(instance, StatusCodeError)
	}

	return instance
}

StatusCodeError.prototype = Object.create(Error.prototype, {
	constructor: {
		value: Error,
		enumerable: false,
		writable: true,
		configurable: true,
	},
	name: {
		value: 'StatusCodeError',
		enumerable: false,
		writable: true,
		configurable: true,
	},
})

if (Object.setPrototypeOf) {
	Object.setPrototypeOf(StatusCodeError, Error)
} else {
	StatusCodeError.__proto__ = Error
}
