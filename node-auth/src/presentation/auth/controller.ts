/**
 * ? Las buenas practias de express recomiendo no hacer controladores asincronos (async)
 */

import { Request, Response } from 'express';

export class AuthController {

	// Inyection dependencies
	constructor() { }

	registerUser = (req: Request, res: Response) => {
		res.json('registerUser Controller')
	}
	
	loginUser = (req: Request, res: Response) => {
		res.json('loginUser Controller');
	}
}