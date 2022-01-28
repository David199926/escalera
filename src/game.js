import * as readline from 'node:readline/promises';
import Board from './Board.js';
import Snake from './Snake.js';
import Stair from './Stair.js';

// prompt input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const board = new Board();
// putting snakes
board.putSnake(new Snake(24, 16));
board.putSnake(new Snake(22, 20));
board.putSnake(new Snake(19, 8));
board.putSnake(new Snake(14, 4));
// putting stairs
board.putStair(new Stair(10, 12));
board.putStair(new Stair(3, 11));
board.putStair(new Stair(9, 18));
board.putStair(new Stair(6, 17));


async function prompt(message) {
    const input = await rl.question(message);
    if (input === "q") {
        console.log("Gracias por jugar");
        process.exit();
    }
}

async function gameInstructions() {
    await prompt("Bienvenido al juego de la escalera! (Presiona cualquier tecla >)");
    await prompt("Es muy sencillo jugar, lo único que tienes que hacer es tirar el dado y moverte por el tablero (>)");
    await prompt("La meta es llegar a la casilla 25, si lo haces, ganarás (>)");
    await prompt("Al tirar el dado, obtendrás un número aleatorio del 1 al 6 que indicará cuantas casillas avanzas (>)");
    await prompt("Si caes en la parte inferior de una escalera, subes por ella (>)");
    await prompt("Si caes en la cabeza de una serpiente, bajas hasta su cola :// (>)");
    await prompt("Si quieres retirarte del juego, presiona la letra \"q\"");
    await prompt("Eso es todo lo que necesitas saber, ahora, a jugar!");
    //rl.close()
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
        await prompt("Tirar el dado? (>)");

        const isOver = board.playTurn();
        if (isOver) {
            console.log("Gracias por jugar");
            break;
        }
    }
    rl.close()
}

await init();
loop();

