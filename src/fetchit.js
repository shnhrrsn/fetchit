const StatusCodeError = require('./StatusCodeError.js')

function fetchit(uri, opts) {
	try {
		const options = Object.assign({ }, {
			credentials: 'same-origin'
		}, opts)

		return fetchit.fetch(build(uri, options), options).then(function(response) {
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
	return this.apply(this, arguments).then(function(response) {
		return response.json()
	})
}

fetchit.text = function() {
	return this.apply(this, arguments).then(function(response) {
		return response.text()
	})
}

function build(uri, options) {
	if(!options) {
		return uri
	}

	options.headers = options.headers || { }

	if(typeof window !== 'undefined') {
		options.headers['X-Requested-With'] = 'XMLHttpRequest'
	}

	buildBody(options)

	if(options.query) {
		if(uri.indexOf('?') >= 0) {
			uri += '&'
		} else {
			uri += '?'
		}

		uri += fetchit.qs.stringify(options.query)
		delete options.query
	}

	return uri
}

function buildBody(options) {
	if(options.form) {
		options.body = fetchit.qs.stringify(options.form)
		options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
		delete options.form
	} else {
		if(!options.body || typeof options.body !== 'object') {
			return
		}

		if(options.headers['Content-Type'] || options.headers['content-type']) {
			return
		}

		if(!!options.body.constructor && options.body.constructor.name === 'FormData') {
			return
		}

		options.body = JSON.stringify(options.body)
		options.headers['Content-Type'] = 'application/json'
	}
}

module.exports = fetchit
