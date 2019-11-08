# E10
### Proyecto de Sistemas y Tecnologías Web

---

#### Integrantes del grupo

> Sergio Delgado López (alu0100893601@ull.edu.es)

> Pablo González González (alu0100887037@ull.edu.es)

> Eduardo Brito Sánchez (alu0100783315@ull.edu.es)

---

## Introducción

<div style="text-align: justify">

La idea principal de la aplicación web es crear un organizador de exámenes donde los estudiantes de Informática (por el momento) puedan obtener calendarios personalizados siguiendo una serie de criterios, como son la importancia de la  asignatura o la cantidad de convocatorias agotadas. 

En esta aplicación se podrá seleccionar las asignaturas que se deseen, y basándose en las fechas de exámenes oficiales, se creará un calendario personal. Además, las asignaturas serán clasificadas según su importancia: las más importantes (4-5 convocatoria, 3ª-4ª matrícula u opinión personal) aparecerán en rojo, e irá decrementando hasta el blanco, pasando por naranja y amarillo.  

Por último, se pretende crear una opción en la que la gente pueda puntuar la dificultad de una asignatura y dicha puntuación sea visible para todos los usuarios, facilitando así la selección de asignaturas y evitando la conglomeración de exámenes complicados.  

</div>

---

## Definición de los roles

<div style="text-align: justify">

#### Usuario
* Cambiar foto de perfil.
* Definir la dificultad de los exámenes.
* Añadir eventos que no sean exámenes.
* Comentar los exámenes (global).
* Modificar los campos del perfil (cambio de username, password, etc.).
* Poner “notas” a los exámenes (personal).
* Compartir la aplicación por redes sociales.
* Registrarse.
* Iniciar sesión.
* Leer los términos y condiciones.
* Buscar exámenes por grado -> curso -> itinerario.  

#### Administrador
* Meter exámenes en el pool de la app.
* Gestión de las calificaciones de la aplicación.
* Establecer el calendario (días festivos, etc.).  

</div>

---

## Definición del modelo de datos

<div style="text-align: justify">

Usamos MongoDB como sistema para nuestra base de datos.

> MongoDB (del inglés humongous, "enorme") es un sistema de base de datos NoSQL orientado a documentos de código abierto.
>
> En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida. 
>
> -- <cite>Wikipedia</cite>

</div>

| Coleción alumnos 
|:-------------:|
|Nombre(String) 
|Apellidos(String) 
|NIF*(Short int) 
|IDGrado(Short int) 
|IDAsignaturaMatriculadas(Array) 
|IDExamenes(Array)  


|Coleción asignaturas
|:-------------:
|IDAsignatura*(Short int)
|IDGrado(Short int)
|Curso(Short int)
|NombreAsignatura(String)
|Itinerario(String)
|Fechas(Array)
|⤷ Fecha de examen(Date)  


|Colección exámenes
|:-------------:|
|IDExamen*(Short int)
|NIFAlumno(Short int)
|IDAsignatura(Short int)
|Fecha(Date)
|Convocatoria (Short Int)
|SePresenta(Boolean)
|DificultadUsuario(Float)
|CalificacionObtenida(Float)
|NotasUsuario(String)

|Colección usuarios
|:-------------:|
|IDUsuario
|Contraseña

---

## Continuación