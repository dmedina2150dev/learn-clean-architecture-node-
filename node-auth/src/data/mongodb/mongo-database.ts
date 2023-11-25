/**
 * TODO: Si ocupamos inyeccion de dependencia podemos o debemos ⤵️
 * TODO: Crear el constructor si no ⤵️
 * TODO: Podemos utilizar metodos estaticos
 */


interface Options {
	mongoUrl: string;
	dbName: string;
}

import mongoose from 'mongoose';

export class MongoDatabase {

	static async connect(options: Options) {

		const { mongoUrl, dbName } = options;

		try {
			//'mongodb://127.0.0.1:27017/test'
			await mongoose.connect(mongoUrl, {
				dbName: dbName
			});

			console.log(`Connected to database`);
		} catch (error) {
			console.error('Mongo connection error:');
			throw error;
		}
	}

}