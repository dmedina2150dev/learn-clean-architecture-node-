/**
 * TODO: Por reglas de codigo limpio el (UserEntity) deberia llamarse (User) porque es implicito.
 * 
 */

export class UserEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string[],
        public img?: string,
    ) {}
}