import {authHeader} from "../helpers";

export const calendarService = {
	addGrados,
};

async function addGrados(JSONdata) {
	const requestOptions = {
		method: "POST",
		headers: authHeader(),
		body: JSON.stringify(JSONdata),
	};
	return fetch(`http://localhost:3000/grados/addGrados`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Grado metido");
		})
		.catch((err) => {
			console.error(err);
		});
}

function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
				location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
