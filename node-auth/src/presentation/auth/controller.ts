/**
 * ? Las buenas practias de express recomiendo no hacer controladores asincronos (async)
 */

import { Request, Response } from 'express';
import { AuthRepository, RegisterUserDto } from '../../domain';

export class AuthController {

	// Inyection dependencies
	constructor(
		private readonly authRepository: AuthRepository
	) { }

	registerUser = (req: Request, res: Response) => {
		const [error, registerUserDto] = RegisterUserDto.create(req.body);

		if ( error ) return res.status(400).json({ error });

		this.authRepository.register(registerUserDto!)
			.then( user => res.json( user ) )
			.catch( err => res.status(500).json(error));
	}
	
	loginUser = (req: Request, res: Response) => {
		res.json('loginUser Controller');
	}
}