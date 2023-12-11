/**
 * ? Las buenas practias de express recomiendo no hacer controladores asincronos (async)
 */

import { Request, Response } from 'express';
import { AuthRepository, CustomError, LoginUser, LoginUserDto, RegisterUser, RegisterUserDto } from '../../domain';
import { JwtAdapter } from '../../configs';
import { UserModel } from '../../data/mongodb';

export class AuthController {

	// Inyection dependencies
	constructor(
		private readonly authRepository: AuthRepository
	) { }

	private handleError = ( error: unknown, res: Response ) => {
		if ( error instanceof CustomError ) {
			return res.status(error.statusCode).json({ error: error.message });
		}

		// Si no es una instancia de custom error
		// TODO: Utilizar un Winston --> Para loggear el error sin consolo.log
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}

	registerUser = (req: Request, res: Response) => {
		const [error, registerUserDto] = RegisterUserDto.create(req.body);

		if ( error ) return res.status(400).json({ error });

		new RegisterUser(this.authRepository)
			.execute(registerUserDto!)
			.then(data => res.json(data))
			.catch(error => this.handleError(error, res))
	}
	
	loginUser = (req: Request, res: Response) => {
		const [error, loginUserDto] = LoginUserDto.create(req.body);
		
		if ( error ) return res.status(400).json({ error });

		new LoginUser(this.authRepository)
			.execute(loginUserDto!)
			.then(data => res.json(data))
			.catch(error => this.handleError(error, res));

	}
	
	getUsers = (req: Request, res: Response) => {
		UserModel.find()
			.then( (users) => {
				res.json({
					users,
					user: req.body.user
				});
			})
			.catch(() => res.status(500).json({error: 'Internal server error'}));
	}
}