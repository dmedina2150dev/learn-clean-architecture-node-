import { Router } from 'express';

import { AuthController } from './controller';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class AuthRoutes {
	static get routes(): Router {
		const router = Router();
		const datasource = new AuthDatasourceImpl();
		const authRepository = new AuthRepositoryImpl(datasource);

		const controller = new AuthController(authRepository);

		// TODO: Definir todas las rutas principales
		router.post('/login', controller.loginUser);
		//* TODO: Se puede hacer de ambas formas ⤵️⤴️
		router.post('/register', (req, res) => controller.registerUser(req, res));

		router.get('/', [AuthMiddleware.validateJWT], controller.getUsers);


		return router;
	}
}