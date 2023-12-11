/**
 * ? Se esta adaptando la dependencia porque si se necesita cambiar ⤵️
 * ? la forma en la que se estan leyendo las variables de entorno solo ⤵️
 * ? se modifique un archivo que es este.
 */
import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
	PORT: get('PORT').required().asPortNumber(),
	MONGO_URL: get('MONGO_URL').required().asString(),
	MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
	JWT_SEED: get('JWT_SEED').required().asString(),
}