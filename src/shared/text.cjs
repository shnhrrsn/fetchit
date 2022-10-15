/**
 * @param {Promise<Response>} response
 * @returns {Promise<string>}
 */
function text(response) {
	return response
		.catch(err => {
			if (err.name !== 'StatusCodeError' || !err.response) {
				return Promise.reject(err)
			}

			return err.response
				.text()
				.catch(/** @param {*} err2 */ err2 => Promise.reject(err))
				.then(
					/** @param {*} text */ text => {
						err.text = text
						return Promise.reject(err)
					},
				)
		})
		.then(function (response) {
			return response.text()
		})
}

exports.text = text
