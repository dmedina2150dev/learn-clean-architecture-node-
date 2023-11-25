import { envs } from "./configs";
import { Server } from "./presentation/server";

(() => {
    main();
})()

async function main () {
    // TODO: await de la base de datos
    
    // TODO: inicio del servidor
    console.log("main");
    new Server({
        port: envs.PORT,
    }).start();
}