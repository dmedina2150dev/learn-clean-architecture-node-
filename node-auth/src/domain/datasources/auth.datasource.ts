/**
 * * Como son abstracciones generamos clases abstractas, porque no queremos ⤵️
 * * crear instancias de esta clase.
 * 
 * ? abstract --> se va a encargar de que la clase solo va a servir para expandirla o ⤵️
 * ? para implementarla, pero no para crear instancias de esta clase. ⤵️ 
 * * No se podra (new AuthDatasource())
 * ? Solo definiremos reglas
 */

import { LoginUserDto, RegisterUserDto } from '../dtos';
import { UserEntity, UserLoginEntity } from '../entities';

export abstract class AuthDatasource {

    // TODO: Sera una tarea
    abstract login( loginUserDto: LoginUserDto ): Promise<UserLoginEntity>;

    abstract register( registerUserDto: RegisterUserDto ): Promise<UserEntity>;
}