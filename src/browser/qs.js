function stringifyWithURLSearchParams(object) {
	const params = new URLSearchParams

	for(const key in object) {
		const value = object[key]

		if(Array.isArray(value)) {
			for(const v of value) {
				params.append(key, v)
			}
		} else {
			params.set(key, object[key])
		}
	}

	return params.toString()
}

function stringifyFallback(object) {
	const queryString = [ ]

	for(const key in object) {
		const value = object[key]

		if(Array.isArray(value)) {
			for(const v of value) {
				queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(v))
			}
		} else {
			queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
		}
	}

	return queryString.join('&')
}

module.exports = {

	stringify: function(object) {
		if(typeof URLSearchParams === 'undefined') {
			return stringifyFallback(object)
		}

		return stringifyWithURLSearchParams(object)
	}

}
