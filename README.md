# E10

## Proyecto de SyTW

## EMPEP - Organizador de exámenes para universidades

---

Para instalar y desplegar la aplicación es necesario descargar o clonar el repositorio, y estando en la carpeta raíz del mismo, pasar a instalar las dependencias.

#### Instalar las dependencias


npm install

### Crear primer usuario

Para crear el primer usuario admin por defecto, debe ejecutar este comando con la aplicación desplegada:  

`curl -i -X POST -H "Content-Type: application/json" -d '{"name": "Admin", "isAdmin": "true", "email": "admin@admin.com", "password": "admin", "universidad": "Universidad de La Laguna"}' localhost:3000/api/registro`


>>>>>>> 6472f70944a9b8a82af7e0455f0f48e582474121


### Lanzar mongod
Para iniciar mongo por defecto, escribir en consola:  
  
`mongod --config /usr/local/etc/mongod.conf --fork`

### Comandos disponibles

```
"front": "vue-cli-service serve --port 8080",
"deploy": "vue-cli-service build && serve -s dist -l 8080",
"clean": "rm -Rf dist",
"formatter": "prettier --use-tabs true --no-bracket-spacing --jsx-bracket-same-line --tab-width 4 --print-width 100 --write .",
"server": "clear && nodemon --no-deprecation server/server.js"
```

### Lanzar la app


### Para desplegar el frontend

```
npm run front
```

### Para desplegar el backend

```
npm run server
```

### Para desplegar el build

```
npm run deploy
```

### Crear primer usuario

npm run deploy


### Consideraciones 
- Es posible que los botones de "Limpiar formulario" no funcione
- Si existe algún error en los menús de opciones, prueba a refrescar la página  
- Para crear el primer usuario admin, debe ejecutar este comando con la aplicación desplegada:  
  
`curl -i -X POST -H "Content-Type: application/json" -d '{"name": "Admin", "isAdmin": "true", "email": "admin@admin.com", "password": "admin", "universidad": "Universidad de La Laguna"}' localhost:3000/api/registro`
>>>>>>> 6472f70944a9b8a82af7e0455f0f48e582474121
