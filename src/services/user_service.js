// The user service encapsulates all backend api calls for performing CRUD operations on user data, as well as
// logging and out of the example application. The service methods are exported via the userService object at
// the top of the file, and the implementation of each method is located in the functions below.

import {authHeader} from "../helpers";

export const userService = {
	login,
	contact,
	logout,
	register,
	getAll,
	getById,
	update,
	addCalendar,
	deleteCalendar,
	delete: _delete,
};

function login(email, password) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	};

	return fetch(`http://localhost:3000/api/iniciosesion`, requestOptions)
		.then(handleResponse)
		.then((user) => {
			if (user.token) {
				localStorage.setItem("user", JSON.stringify(user));
			}

			return user;
		});
}

function contact(JSONmsg) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(JSONmsg),
	};
	return fetch(`http://localhost:3000/api/contacto`, requestOptions)
		.then(handleResponse);
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem("user");
}

function register(user) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	};

	return fetch(`http://localhost:3000/api/registro`, requestOptions).then(handleResponse);
}

function getAll() {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	return fetch(`http://localhost:3000/api/getAllById`, requestOptions).then(handleResponse);
}

function getById(id) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	return fetch(`http://localhost:3000/api/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
	const requestOptions = {
		method: "PUT",
		headers: {
			...authHeader(),
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	};

	return fetch(`http://localhost:3000/api/${user.id}`, requestOptions).then(handleResponse);
}

function addCalendar(param) {
	const requestOptions = {
		method: "PUT",
		headers: {
			...authHeader(),
			"Content-type": "application/json",
		},
		body: JSON.stringify(param),
	};

	return fetch(
		`http://localhost:3000/api/addCalendar/${param.userWithoutHash._id}`,
		requestOptions
	).then(handleResponse);
}

function deleteCalendar(param) {
	const requestOptions = {
		method: "PUT",
		headers: {
			...authHeader(),
			"Content-type": "application/json",
		},
		body: JSON.stringify(param),
	};

	return fetch(
		`http://localhost:3000/api/deleteCalendar/${param.userWithoutHash._id}`,
		requestOptions
	).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
	const requestOptions = {
		method: "DELETE",
		headers: authHeader(),
	};

	return fetch(`http://localhost:3000/api/users/${id}`, requestOptions).then(handleResponse);
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
