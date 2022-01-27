import Dice from './Dice.js';
import Player from './Player.js';
import Snake from './Snake.js';
import Stair from './Stair.js';

export default class Board {

    constructor(boxes = 25) {
        this.boxes = boxes;
        this.player = new Player(boxes);
        this.dice = new Dice();
        // stairs and snakes
        this.snakes = [];
        this.stairs = [];
        this.putSnakes();
        this.putStairs();
    }

    putSnakes() {
        this.snakes.push(new Snake(24, 16))
        this.snakes.push(new Snake(22, 20))
        this.snakes.push(new Snake(19, 8))
        this.snakes.push(new Snake(14, 4))
    }

    putStairs() {
        this.stairs.push(new Stair(10, 12))
        this.stairs.push(new Stair(3, 11))
        this.stairs.push(new Stair(9, 18))
        this.stairs.push(new Stair(6, 17))
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