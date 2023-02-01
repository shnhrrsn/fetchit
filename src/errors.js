export class StatusCodeError extends Error {
	/** @type {string} */ name
	/** @type {string} */ message
	/** @type {string | undefined} */ stack
	/** @type {number} */ status
	/** @type {number} */ statusCode
	/** @type {number} */ code
	/** @type {Response | undefined} */ response

	/**
	 * @param {number} status
	 * @param {string | undefined} message
	 */
	constructor(status, message = undefined) {
		super(message || status.toString())
		this.message = message || status.toString()
		this.name = 'StatusCodeError'
		this.status = status
		this.statusCode = status
		this.code = status
	}
}
