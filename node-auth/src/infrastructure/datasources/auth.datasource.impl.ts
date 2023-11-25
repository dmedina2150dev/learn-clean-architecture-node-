/**
 * 
 */

import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {

            // 1. Verificar si existe correo en base de datos

            // 2. Encriptar constraseña

            // 3. Mepear las respuestas a nuestra entidad

            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN'],
            )
            
        } catch (error) {
            if ( error instanceof CustomError ) {
                throw error;
            }

            throw CustomError.internalServer();
        }
    }
}
