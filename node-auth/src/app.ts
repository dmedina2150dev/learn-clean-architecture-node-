import { envs } from './configs';
import { MongoDatabase } from './data/mongodb';

import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(() => {
    main();
})()

async function main () {
    // TODO: await de la base de datos
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    });
    
    // TODO: inicio del servidor
    // console.log("main");
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    }).start();
}