import Dice from './Dice.js';

export default class Board {

    constructor(boxes = 25) {
        this.boxes = boxes;
        this.dice = new Dice();

        // stairs and snakes
        this.snakes = [];
        this.stairs = [];
    }

    putSnake(snake) {
        if (snake.head > this.boxes) {
            throw new Error(`La serpiente debe iniciar máximo en la casilla ${this.boxes}`);
        }
        this.snakes.push(snake);
    }

    putStair(stair) {
        if (stair.end > this.boxes) {
            throw new Error(`La escalera debe terminar máximo en la casilla ${this.boxes}`);
        }
        this.stairs.push(stair);
    }

    playTurn(player) {
        let steps = this.dice.roll();

        let rest = this.boxes - player.position;
        if (steps > rest) {
            let back = steps - rest;
            console.log(`${player.name} se ha pasado de la meta, retrocederá ${back} casillas`);
            player.move(rest - back);
        } else {
            player.move(steps);
        }

        return this.validations(player);
    }

    validations(player) {
        // stair validation
        this.stairValidation(player);
        // snake validation
        this.snakeValidation(player);

        // wining validation
        if (player.position >= this.boxes) {
            console.log(`${player.name} llegó a la casilla ${this.boxes}, ${player.name} ha ganado!!`);
            return true;
        }
        return false;
    }

    stairValidation(player) {
        this.stairs.forEach(stair => {
            if (stair.start === player.position) {
                console.log(`${player.name} cayó en una escalera que le lleva a la casilla ${stair.end}`);
                player.moveTo(stair.end);
                this.validations(player);
                return;
            }
        })
    }

    snakeValidation(player) {
        this.snakes.forEach(snake => {
            if (snake.head === player.position) {
                console.log(`${player.name} cayó en una serpiente que le lleva a la casilla ${snake.tail} :(`);
                player.moveTo(snake.tail)
                this.validations(player);
                return;
            }
        })
    }
}