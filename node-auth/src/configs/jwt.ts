import jwt from 'jsonwebtoken';

export class JwtAdapter {
	static async generateToken(
		payload: Object,
		duration: string = '2h'
	): Promise<string | null> {

		return new Promise((resolve) => {
			// TODO: Generacion del SEED
			jwt.sign(
				payload,
				'SEED',
				{ expiresIn: duration },
				(err, _token) => {
					if (err) return resolve(null);
					
					resolve(_token!);
				});
		});

	}

	static validateToken(token: string) {
		return new Promise((resolve) => {
			jwt.verify(token,'SEED', (err, decoded) => {
				if (err) return resolve(null);

				resolve(decoded);
			});
		});
	}
}