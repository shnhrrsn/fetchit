/**
 * @param {Promise<Response>} response
 * @returns {Promise<any>}
 */
function json(response) {
	return response
		.catch(error => {
			if (error.name !== 'StatusCodeError' || !error.response) {
				return Promise.reject(error)
			}

			return error.response
				.json()
				.catch(/** @param {*} err2 */ err2 => Promise.reject(error))
				.then(
					/** @param {*} json */ json => {
						error.json = json
						return Promise.reject(error)
					},
				)
		})
		.then(response => response.json())
}

exports.json = json
