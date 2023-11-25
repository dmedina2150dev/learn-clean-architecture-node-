import { envs } from './configs';

import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(() => {
    main();
})()

async function main () {
    // TODO: await de la base de datos
    
    // TODO: inicio del servidor
    console.log("main");
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    }).start();
}