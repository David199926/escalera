import * as readline from 'node:readline/promises';
import Player from './Player';

// prompt input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


async function gameInstructions() {
    await rl.question("Bienvenido al juego de la escalera! (Presiona cualquier tecla >)")
    await rl.question("Es muy sencillo jugar, lo único que tienes que hacer es tirar el dado y moverte por el tablero (>)");
    await rl.question("La meta es llegar a la casilla 25, si lo haces, ganarás (>)");
    await rl.question("Al tirar el dado, obtendrás un número aleatorio del 1 al 6 que indicará cuantas casillas avanzas (>)");
    //console.log()
    rl.close()
}

/**
 * Starts the game
 */
function start() {
    // first, instructions
    gameInstructions();
}

start();

