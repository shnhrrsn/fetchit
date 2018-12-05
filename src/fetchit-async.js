const StatusCodeError = require('./StatusCodeError.js')
const build = require('./build.js')

async function fetchit(uri, options) {
	[ uri, options ] = build(fetchit.qs, uri, options)

	const response = await fetchit.fetch(uri, options)

	if(!response.ok) {
		const error = new StatusCodeError(response.status)
		error.response = response
		throw error
	}

	return response
}


fetchit.json = async function() {
	try {
		const response = await this.apply(this, arguments)
		return await response.json()
	} catch(err) {
		if(err.name !== 'StatusCodeError' || !err.response) {
			throw err
		}

		try {
			err.json = await err.response.json()
			throw err
		} catch(err2) {
			throw err
		}
	}
}

fetchit.text = async function() {
	try {
		const response = await this.apply(this, arguments)
		return await response.text()
	} catch(err) {
		if(err.name !== 'StatusCodeError' || !err.response) {
			throw err
		}

		try {
			err.text = await err.response.text()
			throw err
		} catch(err2) {
			throw err
		}
	}
}

module.exports = fetchit