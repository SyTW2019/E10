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
	delete: _delete,
};

async function login(username, password) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
		}),
	};

	console.log(requestOptions);

	return fetch(`http://localhost:3000/iniciosesion`, requestOptions)
		.then(handleResponse)
		.then((user) => {
			console.log;
			// login successful if there's a jwt token in the response
			if (user.token) {
				// store user details and jwt token in local storage to keep
				// user logged in between page refreshes
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
	return fetch(`http://localhost:3000/contacto`, requestOptions)
		.then(handleResponse)
		.then(alert("El mensaje ha sido enviado con exito"));
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem("user");
}

async function register(user) {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	};

<<<<<<< HEAD
	console.log(user);

	return fetch(`http://localhost:3000/registro`, requestOptions).then(handleResponse);
=======
	return fetch(`http://localhost:3000/registro`, requestOptions).then((res) => {
		if (res.status(200)) {
			handleResponse;
		} else {
			alert("Error desde back: " + res.message());
		}
	});
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
}

async function getAll() {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	return fetch(`http://localhost:3000/`, requestOptions).then(handleResponse);
}

async function getById(id) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(),
	};

	return fetch(`http://localhost:3000/${id}`, requestOptions).then(handleResponse);
}

async function update(user) {
	const requestOptions = {
		method: "PUT",
		headers: {
			...authHeader(),
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	};

	return fetch(`http://localhost:3000/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id) {
	const requestOptions = {
		method: "DELETE",
		headers: authHeader(),
	};

	return fetch(`http://localhost:3000/users/${id}`, requestOptions).then(handleResponse);
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
