import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../configs';

export class AuthMiddleware {
    static validateJWT = async (req: Request, res: Response, next: NextFunction) => {

        const authorization = req.header('Authorization');

        if (!authorization) return res.status(401).json({error: 'Invalid authorization no token provided'});

        // * Revisamos que sea un Bearer Token
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({error: 'Invalid Bearer token'});

        const token = authorization.split(' ').at(1) || '';

        try {
            // TODO: Implementar tomar el payload del JWTAdaptor
            const payload = await JwtAdapter.validateToken(token);

            if (!payload) return res.status(401).json({error: 'Invalid token'});

            req.body.payload = payload;


        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Pasó por el middleware');

        next();
    }
}