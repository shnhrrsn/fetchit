export default function text(response: Promise<Response>) {
	return response
		.catch(function (err) {
			if (err.name !== 'StatusCodeError' || !err.response) {
				return Promise.reject(err)
			}

			try {
				return err.response.text().then((text: any) => {
					err.text = text
					return Promise.reject(err)
				})
			} catch (err2) {
				return Promise.reject(err)
			}
		})
		.then(function (response) {
			return response.text()
		})
}
