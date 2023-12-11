/**
 * * Como son abstracciones generamos clases abstractas, porque no queremos ⤵️
 * * crear instancias de esta clase.
 * 
 * ? abstract --> se va a encargar de que la clase solo va a servir para expandirla o ⤵️
 * ? para implementarla, pero no para crear instancias de esta clase. ⤵️ 
 * * No se podra (new AuthDatasource())
 * ? Solo definiremos reglas
 * 
 * ! Los repositories son exactamente iguales a las clases abstract del datasource ⤵️
 * ! Porque la idea del repository es conozca cuales son los metodos que llamaremos de nuestro datasource
 * 
 * 
 * * La idea es que cuendo se llame al Repository se le pasa un datasource AuthRepository( datasourse ) ⤵️
 * * y asi el repository ya sabe que metodos tiene - Lo que nos permite cambiar el datasource sin tener que hacer ⤵️
 * * cambios en base de datos, o cambios en los casos de uso. Porque nuestros casos de uso ⤵️
 * * son los que van a terminar llamando a nuestros repositories
 */

import { LoginUserDto, RegisterUserDto } from '../dtos';
import { UserEntity, UserLoginEntity } from '../entities';

export abstract class AuthRepository {

    // TODO: Sera una tarea
    abstract login( loginUserDto: LoginUserDto ): Promise<UserLoginEntity>;

    abstract register( registerUserDto: RegisterUserDto ): Promise<UserEntity>;
}