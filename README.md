# E10

## Proyecto de SyTW

## EMPEP - Organizador de exámenes para universidades

---

Para instalar y desplegar la aplicación es necesario descargar o clonar el repositorio, y estando en la carpeta raíz del mismo, pasar a instalar las dependencias.

#### Instalar las dependencias


npm install

### Crear primer usuario

Para crear el primer usuario admin, debe ejecutar este comando con la aplicación desplegada:  
  
`curl -i -X POST -H "Content-Type: application/json" -d '{"name": "Admin", "isAdmin": "true", "email": "admin@admin.com", "password": "admin", "universidad": "Universidad de La Laguna"}' localhost:3000/api/registro`

### Comandos disponibles


"front": "vue-cli-service serve --port 8080",
"deploy": "vue-cli-service build && serve -s dist -l 8080",
"clean": "rm -Rf dist",
"formatter": "prettier --use-tabs true --no-bracket-spacing --jsx-bracket-same-line --tab-width 4 --print-width 100 --write .",
"server": "clear && nodemon --no-deprecation server/server.js"


### Lanzar la app


# Para desplegar el frontend
npm run front

# Para desplegar el backend
npm run server


### Para desplegar el build


npm run deploy