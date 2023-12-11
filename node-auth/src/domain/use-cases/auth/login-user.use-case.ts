/**
 * 
 */

import { JwtAdapter } from "../../../configs";
import { LoginUserDto } from "../../dtos";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories";


// TODO: La interface nos ayuda a deficinir el metodo a ejecutar

interface UserLogged {
    token: string;
	user: {
		id: string;
		name: string;
		email: string;
		role?: string[];
		imgPath?: string;
	}
}

interface LoginUserUseCase {
    execute(loginUserDto: LoginUserDto): Promise<UserLogged>;
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>;

export class LoginUser implements LoginUserUseCase {
    
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly signToken: SignToken = JwtAdapter.generateToken,
    ) {}

    
    async execute(loginUserDto: LoginUserDto): Promise<UserLogged> {
        const user = await this.authRepository.login(loginUserDto);

        // token
		const token = await this.signToken({ id: user.id }, '2h');

        if (!token) throw CustomError.internalServer('Error authenticating user - invalid token');
        
        return {
			token: token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role,
				imgPath: user.img
			}
		}
    }    
}
