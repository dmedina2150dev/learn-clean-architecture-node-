/**
 * 
 */

import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {

            // 1. Verificar si existe correo en base de datos
            const existEmail = await UserModel.findOne({ email: email });
            if (existEmail) throw CustomError.badRequest(`User ${email} already`);
            
            // 2. Encriptar constraseña

            
            // 2.1 Crear el usuario que se guardara
            const user = await UserModel.create({
                name: name,
                email: email,
                password: password
            });

            // 2.2 Guardar el usuario en la base de datos
            await user.save();


            // 3. Mepear las respuestas a nuestra entidad
            // TODO: Falta hacer un mapper
            return new UserEntity(
                user.id,
                name,
                email,
                password,
                user.roles,//['ADMIN'],
            )
            
        } catch (error) {
            if ( error instanceof CustomError ) {
                throw error;
            }

            throw CustomError.internalServer();
        }
    }
}
