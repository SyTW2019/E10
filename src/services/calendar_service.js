import {authHeader} from "../helpers";

export const calendarService = {
	getGradosCursos,
	getAsignaturas,
	getExamenes,
};

<<<<<<< HEAD
async function getGradosCursos() {
=======
async function getGradosCursos(params) {
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};
	return await fetch(`http://localhost:3000/grados/getGrados`, requestOptions)
		.then(() => {
			handleResponse;
			console.log("Grado y cursos cogidos");
		})
		.catch((err) => {
			console.error(err);
		});
}

<<<<<<< HEAD
async function getAsignaturas() {
=======
async function getAsignaturas(params) {
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};
	return await fetch(`http://localhost:3000/asignaturas`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Asignaturas cogidas");
		})
		.catch((err) => {
			console.error(err);
		});
}
<<<<<<< HEAD

async function getExamenes() {
=======
async function getExamenes(params) {
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};
	return await fetch(`http://localhost:3000/examenes`, requestOptions)
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
