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

import express from 'express';

interface Options {
	port?: number;
}

export class Server {

	public readonly app = express();
	private readonly port: number;

	constructor(options: Options) {
		const { port = 3100 } = options;

		this.port = port;

	}

	async start() {


		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}

}