import { Router } from 'express';

import { AuthController } from './controller';

export class AuthRoutes {
	static get routes(): Router {
		const router = Router();
		const controller = new AuthController();

		// TODO: Definir todas las rutas principales
		router.post('/login', controller.loginUser);
		//* TODO: Se puede hacer de ambas formas ⤵️⤴️
		router.post('/register', (req, res) => controller.registerUser(req, res));


		return router;
	}
}