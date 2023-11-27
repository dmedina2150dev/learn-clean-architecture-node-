/**
 * * El esquema son las reglas de como queremos que el modelo trabaje
 * 
 * TODO: Property required  ⤵️
 * ? Se puede enviar solo (true) ⤵️
 * ? O un arreglo donde primer parametro (true/false) ⤵️
 * ? El segundo un string como message para indicar el error ⤵️
 * ? quedando asi [true, 'Name is required'] -> o lo que quieras escribir
 * 
 * TODO: Property unique  ⤵️
 * ? Se refiere a que ese valor debe ser unico en el base de datos ⤵️
 * ? Por lo que debemos validarlo antes
 * 
 */

import mongoose, { Schema } from 'mongoose';

// TODO: Esta es solamente la definicion
const userSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
	},
	password: {
		type: String,
		require: [true, 'Password is requierd']
	},
	img: {
		type: String,
	},
	roles: {
		type: [String],
		default: ['USER_ROLE'],
		enum: ['USER_ROLE', 'ADMIN_ROLE']
	}
});


// TODO: Este es el modelo que expondremos
export const UserModel = mongoose.model('User', userSchema);