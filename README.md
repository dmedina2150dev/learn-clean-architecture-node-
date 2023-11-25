# [Clean Architecture with NodoJs](NOTAS.md)

## What to learn when building this Application

Rest API for Authentication and Creation of Users.

Implementing repository patterns for integration of database.

### Carpetas

1. __Presentation__ (Parte más externa de la aplicación, aloja framework o librerias como React, etc... es la parte más cercana a quien consume la aplicación)
2. __Domain__ (Reglas de negocio que gobiernan nuestra app, casos de uso, como se implementan los adapters, los datasources como funcionan los reposirios... El codigo de está carpeta no tendra dependencias externas)
3. __infrastructure__ (Le gusta crearla al Profesor - Y esta carpeta represena un punto intermedio entra __domain__ y __presentation__. Aquí creamos las implementaciones de los datasources, de los repositories, los mappers)




