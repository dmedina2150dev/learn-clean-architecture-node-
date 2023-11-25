/**
 * ? Expresion regular para validar el email
 * TODO: Podemos agregar cualquier validacion que creamos necesarios en esta clase
 */
export class Validators {

	static get email() {
		return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	}
}