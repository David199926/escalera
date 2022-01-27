import * as readline from 'node:readline/promises';
import Board from './Board.js';

// prompt input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const board = new Board();


async function gameInstructions() {
    await rl.question("Bienvenido al juego de la escalera! (Presiona cualquier tecla >)");
    await rl.question("Es muy sencillo jugar, lo único que tienes que hacer es tirar el dado y moverte por el tablero (>)");
    await rl.question("La meta es llegar a la casilla 25, si lo haces, ganarás (>)");
    await rl.question("Al tirar el dado, obtendrás un número aleatorio del 1 al 6 que indicará cuantas casillas avanzas (>)");
    await rl.question("Si caes en la parte inferior de una escalera, subes por ella (>)");
    await rl.question("Si caes en la cabeza de una serpiente, bajas hasta su cola :// (>)");
    await rl.question("Si quieres retirarte dl juego, presiona la letra \"q\"");
    await rl.question("Eso es todo lo que necesitas saber, ahora, a jugar!");
    rl.close()
    console.log("************************************************************************")
}

/**
 * First instructions
 */
async function init() {
    // first, instructions
    await gameInstructions();
}

/**
 * Game loop
 */
async function loop() {

    while (true) {
        const input = await rl.question("Tirar el dado? (>)");

        // exit game validation
        if (input === "q") {
            console.log("Gracias por jugar");
            break;
        }
        const isOver = board.playTurn();
        if (isOver) {
            console.log("Gracias por jugar");
            break;
        }
    }
    rl.close()
}



//await init();
loop();

