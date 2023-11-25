/**
 * El constructor para mandar las configuraciones y los cambios
 * que vamos a querer realizarle al servidor
 * 
 * TODO: Aplicando Principio de responsabilidad unica.
 * 
 * ? Nuestras clases debe estar abiertas 
 * ? para la expanción pero cerradas para su modificación
 * ! Debemos evitar las dependencias externas y dependencias ocultas como ⤵️
 * *(process.env.NODE_ENV)* Podemos crearlas como dependencias explicitas
 */

import express, { Router } from 'express';

interface Options {
	port?: number;
	routes: Router;
}

export class Server {

	public readonly app = express();
	private readonly port: number;
	private readonly routes: Router;

	constructor(options: Options) {
		const { port = 3100, routes } = options;

		this.port = port;
		this.routes = routes;
	}

	async start() {
		// Middlewares
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true })); // * Para soportar x-www-form-urlencoded

		
		// Usamos el middleware para cargar las rutas bases
		this.app.use(this.routes);

		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}

}