import Dice from './Dice.js';
import Player from './Player.js';

export default class Board {

    constructor(boxes = 25) {
        this.boxes = boxes;
        this.player = new Player(boxes);
        this.dice = new Dice();
        // stairs and snakes
        this.snakes = [];
        this.stairs = [];
    }

    putSnake(snake) {
        if (snake.head > this.boxes) {
            throw new Error(`La serpiente debe iniciar máximo en la casilla ${this.boxes}`)
        }
        this.snakes.push(snake);
    }

    putStair(stair) {
        if (stair.end > this.boxes) {
            throw new Error(`La escalera debe terminar máximo en la casilla ${this.boxes}`)
        }
        this.stairs.push(stair);
    }

    playTurn() {
        let steps = this.dice.roll();
        this.player.move(steps);

        return this.validations();
    }

    validations() {
        // stair validation
        this.stairValidation();
        // snake validation
        this.snakeValidation();

        // wining validation
        if (this.player.position >= this.boxes) {
            console.log(`Llegaste a la casilla ${this.boxes}, ganaste!!`)
            return true;
        }
        return false;
    }

    stairValidation() {
        this.stairs.forEach(stair => {
            if (stair.start === this.player.position) {
                console.log(`Caiste en una escalera que te lleva a la casilla ${stair.end}`)
                this.player.moveTo(stair.end);
                this.validations();
                return;
            }
        })
    }

    snakeValidation() {
        this.snakes.forEach(snake => {
            if (snake.head === this.player.position) {
                console.log(`Caiste en una serpiente que te lleva a la casilla ${snake.tail} :(`)
                this.player.moveTo(snake.tail)
                this.validations();
                return;
            }
        })
    }
}