import { Router } from 'express';


export class AuthRoutes {
	static get routes(): Router {
		const router = Router();

		// TODO: Definir todas las rutas principales
		router.post('/login', (req, res) => {
			console.log('LLEGO');
			res.json({ ok: true });
		});
		
		router.post('/register', (req, res) => {
			console.log('LLEGO');
			res.json({ ok: true });
		});


		return router;
	}
}