/**
 * @param {Promise<Response>} response
 * @returns {Promise<any>}
 */
export default function json(response) {
	return response
		.catch(error => {
			if (error.name !== 'StatusCodeError' || !error.response) {
				return Promise.reject(error)
			}

			try {
				return error.response.json().then(
					/** @param {*} json */ json => {
						error.json = json
						return Promise.reject(error)
					},
				)
			} catch (err2) {
				return Promise.reject(error)
			}
		})
		.then(response => response.json())
}
