import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../configs';
import { UserModel } from '../../data/mongodb';

export class AuthMiddleware {
    static validateJWT = async (req: Request, res: Response, next: NextFunction) => {

        const authorization = req.header('Authorization');

        if (!authorization) return res.status(401).json({error: 'Invalid authorization no token provided'});

        // * Revisamos que sea un Bearer Token
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({error: 'Invalid Bearer token'});

        const token = authorization.split(' ').at(1) || '';

        try {
            // TODO: Implementar tomar el payload del JWTAdaptor
            const payload = await JwtAdapter.validateToken<{ id: string }>(token);

            if (!payload) return res.status(401).json({error: 'Invalid token'});

            /**
             * ? Aqui estariamos acoplando el modelo de mongoose ⤵️
             * ? Lo cual esta mal. Y no tiene sentido que este acoplado. ⤵️
             * ? Deberiamos tener nuestro propio datasource para buscar el usuario y ese ⤵️
             * ? tipo de transacciones.
             */
            const user = await UserModel.findById(payload.id);

            /**
             * ! Podriamos considerar este error como un 500 ⤵️
             * ! Ya que el token si funciona pero tiene un usuario ⤵️
             * ! que ya no existe en nuestra base de datos
             */
            if (!user) return res.status(401).json({error: 'Invalid token - user not found'});

            // TODO: AQUI PODRIAMOS HACER CUALQUIER TIPO DE VALIDACION DE NEGOCIO

            req.body.user = user;

            next();

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}