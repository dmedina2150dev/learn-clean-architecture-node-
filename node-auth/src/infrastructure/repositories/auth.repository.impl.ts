/**
 * 
*/
import { AuthDatasource, RegisterUserDto, UserEntity, AuthRepository, LoginUserDto, UserLoginEntity } from '../../domain';

export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDatasource: AuthDatasource
    ) {}

    login(loginUserDto: LoginUserDto): Promise<UserLoginEntity> {
        return this.authDatasource.login(loginUserDto);
    }
    
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto);
    }

}