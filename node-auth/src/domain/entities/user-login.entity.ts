

export class UserLoginEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public role: string[],
        public img?: string,
    ) {}
}