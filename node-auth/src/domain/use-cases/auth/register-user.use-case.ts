/**
 * 
 */
import { JwtAdapter } from "../../../configs";
import { RegisterUserDto } from "../../dtos";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories";

interface UserToken {
	token: string;
	user: {
		id: string;
		name: string;
		email: string;
	}
}

interface RegisterUserUseCase {
	execute(registerUserDto: RegisterUserDto): Promise<UserToken>;
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>;

export class RegisterUser implements RegisterUserUseCase {

	constructor(
		private readonly authRepository: AuthRepository,
		private readonly signToken: SignToken = JwtAdapter.generateToken,
	) {}

	async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {
		// Crear usuario
		const user = await this.authRepository.register(registerUserDto);
		
		// token
		const token = await this.signToken({ id: user.id }, '2h');

		if (!token) throw CustomError.internalServer('Error authenticating user - invalid token');

		return {
			token: token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
			}
		}
	}

}