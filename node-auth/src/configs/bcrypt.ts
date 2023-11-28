/**
 * ! Usamos el patron adapter con esto adaptamos el paquete externo para ⤵️
 * * Así evitamos depender del paquete en diferentes lugares de la aplicación⤵️
 * * Y poder sustituirlo facilmente
 * 
 */

import { compareSync, hashSync } from 'bcryptjs';


export class BcryptAdapter {
    static hash( password: string ): string {
        return hashSync(password);
    }

    static compare( password: string, hashed: string ): boolean {
        return compareSync( password, hashed );
    }
}