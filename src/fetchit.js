const StatusCodeError = require('./StatusCodeError.js')
const build = require('./build.js')

function fetchit(uri, options) {
	try {
		[ uri, options ] = build(fetchit.qs, uri, options)

		return fetchit.fetch(uri, options).then(function(response) {
			if(!response.ok) {
				const error = new StatusCodeError(response.status)
				error.response = response
				throw error
			}

			return response
		})
	} catch(err) {
		return Promise.reject(err)
	}
}

fetchit.json = function() {
	return this.apply(this, arguments).catch(function(err) {
		if(err.name !== 'StatusCodeError' || !err.response) {
			return Promise.reject(err)
		}

		try {
			return err.response.json().then(json => {
				err.json = json
				return Promise.reject(err)
			})
		} catch(err2) {
			return Promise.reject(err)
		}
	}).then(function(response) {
		return response.json()
	})
}

fetchit.text = function() {
	return this.apply(this, arguments).catch(function(err) {
		if(err.name !== 'StatusCodeError' || !err.response) {
			return Promise.reject(err)
		}

		try {
			return err.response.text().then(text => {
				err.text = text
				return Promise.reject(err)
			})
		} catch(err2) {
			return Promise.reject(err)
		}
	}).then(function(response) {
		return response.text()
	})
}

module.exports = fetchit
