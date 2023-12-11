# Node Auth


Antes de levantar la aplicación

> Levantar docker desktop
> Ejecutar comando para levantar base de datos local

```bash
docker compose up -d 
```

Formas de crear un JWT SEED (palabra clave de validacion secreta para los token)

En MAC & Linux

```bash
openssl rand -hex 32
openssl rand -hex 12

```

En Windows

Se debe configurar en las variables de entorno 
- Apuntando a Program Files/Git/usr/bin
- Buscar openssl 
- Y usamos el mismo comando
  
```bash

openssl rand -hex 12

```