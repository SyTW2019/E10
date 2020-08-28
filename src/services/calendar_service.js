import {authHeader} from "../helpers";

export const calendarService = {
	getGradosCursos,
	getAsignaturas,
	getExamenes,
};

async function getGradosCursos(params) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};
	return fetch(`http://localhost:3000/grados`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Grado y cursos cogidos");
		})
		.catch((err) => {
			console.error(err);
		});
}

async function getAsignaturas(params) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};
	return fetch(`http://localhost:3000/asignaturas`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Asignaturas cogidas");
		})
		.catch((err) => {
			console.error(err);
		});
}
async function getExamenes(params) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};
	return fetch(`http://localhost:3000/examenes`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Examenes cogidos");
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
