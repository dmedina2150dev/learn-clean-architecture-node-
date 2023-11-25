import { Router } from 'express';

import { AuthRoutes } from './auth/routes';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        // TODO: Definir todas las rutas principales
        router.use('/api/auth', AuthRoutes.routes);
        // router.use('/api/user');
        // router.use('/api/orders');
        // router.use('/api/products');
        // router.use('/api/clients');


        return router;
    }
}