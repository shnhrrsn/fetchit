/**
 * @param {Promise<Response>} response
 * @returns {Promise<string>}
 */
export default function text(response) {
	return response
		.catch(err => {
			if (err.name !== 'StatusCodeError' || !err.response) {
				return Promise.reject(err)
			}

			try {
				return err.response.text().then(
					/** @param {*} text */ text => {
						err.text = text
						return Promise.reject(err)
					},
				)
			} catch (err2) {
				return Promise.reject(err)
			}
		})
		.then(function (response) {
			return response.text()
		})
}
