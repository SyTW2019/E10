import {authHeader} from "../helpers";

export const calendarService = {
	getGradosCursos,
};

async function getGradosCursos() {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	var grades = new Array();
	await fetch(`http://localhost:3000/getGrados`, requestOptions)
		.then(handleResponse)
		.then((grados) => {
			grades = grados;
		})
		.catch((err) => {
			console.error(err);
		});

	console.log("LOS GRADOS DEL SERVICIO", grades);
	return grades;
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
