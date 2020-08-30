import {authHeader} from "../helpers";

export const adminService = {
	addGrados,
	addAsigns,
	addExams,
	delGrados,
	// delAsigns,
	// delExams,
};

// REVISAR ESTA FUNCION
async function addGrados(JSONdata) {
	console.log("SERVICES", JSONdata);

	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...authHeader(),
		},
		body: JSON.stringify(JSONdata),
	};

	console.log(requestOptions);

	return await fetch(`http://localhost:3000/api/addGrados`, requestOptions)
		.then(() => {
			handleResponse;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function delGrados(JSONdata) {
	const requestOptions = {
		method: "POST",
		headers: authHeader(),
		body: JSON.stringify(JSONdata),
	};
	return fetch(`http://localhost:3000/api/delGrados`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Grado eliminado");
		})
		.catch((err) => {
			console.error(err);
		});
}

async function addAsigns(JSONdata) {
	console.log("ADMIN_SERVICE: ", JSONdata);
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			...authHeader(),
		},
		body: JSON.stringify(JSONdata),
	};

	return fetch(`http://localhost:3000/api/updateGrade`, requestOptions)
		.then(() => {
			handleResponse;
			console.log("Asignatura metida");
		})
		.catch((err) => {
			console.error(err);
		});
}

async function addExams(JSONdata) {
	const requestOptions = {
		method: "POST",
		headers: authHeader(),
		body: JSON.stringify(JSONdata),
	};
	return fetch(`http://localhost:3000/api/addExams`, requestOptions)
		.then(() => {
			handleResponse();
			console.log("Examen metido");
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
