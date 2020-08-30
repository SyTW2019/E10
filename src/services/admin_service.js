import {authHeader} from "../helpers";

export const adminService = {
	addGrados,
	addAsigns,
	addUsers,
	delGrados,
	delAsigns,
	delUsers,
};

async function addGrados(JSONdata) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...authHeader(),
		},
		body: JSON.stringify(JSONdata),
	};

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
		method: "DELETE",
		headers: authHeader(),
	};
	return fetch(`http://localhost:3000/api/delGrados/${JSONdata}`, requestOptions)
		.then(() => {
			handleResponse;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function delAsigns(JSONdata) {
	const requestOptions = {
		method: "DELETE",
		headers: authHeader(),
	};
	return fetch(`http://localhost:3000/api/delAsigns/${JSONdata}`, requestOptions)
		.then(() => {
			handleResponse;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function delUsers(JSONdata) {
	const requestOptions = {
		method: "DELETE",
		headers: authHeader(),
	};
	return fetch(`http://localhost:3000/api/deleteUserById/${JSONdata}`, requestOptions)
		.then(() => {
			handleResponse;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function addUsers(JSONdata) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...authHeader(),
		},
		body: JSON.stringify(JSONdata),
	};

	return await fetch(`http://localhost:3000/api/registro`, requestOptions)
		.then(() => {
			handleResponse;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function addAsigns(JSONdata) {
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
