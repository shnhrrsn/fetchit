export default function json(response: Promise<Response>) {
	return response
		.catch(function (error) {
			if (error.name !== 'StatusCodeError' || !error.response) {
				return Promise.reject(error)
			}

			try {
				return error.response.json().then((json: any) => {
					error.json = json
					return Promise.reject(error)
				})
			} catch (err2) {
				return Promise.reject(error)
			}
		})
		.then(response => response.json())
}
