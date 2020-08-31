### Fichero para conceptos teoricos de la implementacion

## SRC-FRONT

### ASSETS

En la carpeta assets disponemos archivos de imagenes, videos y otros archivos (por ejemplo si tenemos una serie de archivos pdf que se descargar de nuestra aplicación) que se copiarán tal cual en la aplicación definitiva.

La carpeta assets en una carpeta hija de `src`.

### COMPONENTS

Es donde residen los componentes de la página, estos componentes son reutilizables y toda la implementación reside en el mismo fichero.

```vue
<template> </template>

<script>
export default {
  ...
}
</script>

<style scoped></style>
```

### HELPERS

> `src/helpers/index.js`:

The helpers index file groups all helper exports together so they can be imported in other parts of the app using only the folder path, and enables importing multiple helpers in a single statement.

> `src/helpers/auth_header.js`:

Auth header is a helper function that returns an HTTP Authorization header containing the JSON Web Token (JWT) of the currently logged in user from local storage. If the user isn't logged in an empty object is returned.

The auth header is used to make authenticated HTTP requests to the server api using JWT authentication.

> `src/helpers/router.js`:

The vue router defines all of the routes for the application, and contains a function that runs before each route change to prevent unauthenticated users from accessing restricted routes.

Contiene las rutas de nuestro proyecto y aquí hacemos el enlace de una ruta con un componente x. Por ejemplo, si queremos cargar una página que sea de las últimas noticias, aquí haremos el enlace de estos.

### SERVICES

-   The services layer handles all http communication with backend apis for the application, each service encapsulates the api calls for a content type (e.g. users) and exposes methods for performing constious operations (e.g. CRUD operations). Services can also have methods that don't wrap http calls, for example the userService.logout() method just removes an item from local storage

> `src/services/index.js`:

The services index file groups all service exports together so they can be imported in other parts of the app using only the folder path, and enables importing multiple services in a single statement

> `src/services/user_service.js`:

The user service encapsulates all backend api calls for performing CRUD operations on user data, as well as logging and out of the example application. The service methods are exported via the userService object at the top of the file, and the implementation of each method is located in the functions below.

### STORE

-   Esto es la configuración de Vuex y donde le decimos que queremos guardar para que sea compartido.

> `src/store/index.js`:

This is the main vuex store file that configures the store with all of the above vuex modules.

> `src/store/account_module.js`:

The vuex account module is in charge of the account section of the centralised state store. It contains actions for registering a new user, logging in and logging out of the tutorial application, and contains mutations for each of the lower level state changes involved for each account action.

The initial logged in state of the user is set by checking if the user is saved in local storage, which keeps the user logged in if the browser is refreshed and between browser sessions.

> `src/store/alert_modulejs`:

The vuex alert module is in charge of the alert section of the centralised state store, it contains actions and mutations for setting a success or error alert message, and for clearing the alert.

In this module each alert action just commits a single mutation so it would be possible to commit the mutations directly from your vue components and get rid of the actions.

> `src/store/users_module.js`:

The vuex users module is in charge of the users section of the centralised state store. It contains actions for fetching all users from the api and deleting a user, and contains mutations for each of the lower level state changes involved in each action.

## SERVER

### Helpers

> `server/helpers/db.js`:

The MongoDB wrapper connects to MongoDB using Mongoose and exports an object containing all of the database model objects in the application (currently only User). It provides an easy way to access any part of the database from a single point.

> `server/helpers/error-handler.js`:

The global error handler is used catch all errors and remove the need for redundant error handler code throughout the application. It's configured as middleware in the main server.js file.

> `server/helpers/jwt.js`:

The node JWT middleware checks that the JWT token received in the http request from the client is valid before allowing access to the API, if the token is invalid a "401 Unauthorized" response is sent to the client.

JWT authentication is used on all routes except for the authenticate and register routes which are public.

### User

The users folder contains all code that is specific to the users feature of the api.

> `server/users/user-controller.js`:

The users controller defines all user routes for the api, the route definitions are grouped together at the top of the file and the implementations are below.

Express is the web server used by the api, it's one of the most popular web application frameworks for NodeJS.

> `server/users/user-model.js`:

The user model uses Mongoose to define the schema for the users collection saved in MongoDB. The exported Mongoose model object gives full access to perform CRUD (create, read, update, delete) operations on users in MongoDB, see the user service below for examples.

`schema.set('toJSON', { ... })`; configures which user properties are included when converting MongoDB records to JSON objects which are returned in API responses.

> `server/users/user-service.js`:

The user service contains the core business logic for user authentication and management in the node api, it encapsulates all interaction with the mongoose user model and exposes a simple set of methods which are used by the users controller below.

The top of the file contains the service method definitions so it's easy to see all methods at a glance, the rest of the file contains the method implementations.

### `config.json`

The app config file contains configuration data for the api.

IMPORTANT: The "secret" property is used by the api to sign and verify JWT tokens for authentication, update it with your own random string to ensure nobody else can generate a JWT to gain unauthorised access to your application.

### `server.js`

The server.js file is the entry point into the api, it configures application middleware, binds controllers to routes and starts the Express web server for the api.