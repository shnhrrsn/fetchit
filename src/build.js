module.exports = function build(qs, uri, options) {
	options = Object.assign({ }, {
		credentials: 'same-origin',
		headers: { }
	}, options)

	if(typeof window !== 'undefined') {
		options.headers['X-Requested-With'] = 'XMLHttpRequest'
	}

	buildBody(qs, options)

	if(options.query) {
		if(uri.indexOf('?') >= 0) {
			uri += '&'
		} else {
			uri += '?'
		}

		uri += qs.stringify(options.query)
		delete options.query
	}

	return [ uri, options ]
}

function buildBody(qs, options) {
	if(options.form) {
		options.body = qs.stringify(options.form)
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
