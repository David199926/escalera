import Dice from './Dice.js';
import Player from './Player.js';

export default class Board {

    constructor(boxes = 25) {
        this.boxes = boxes;
        this.player = new Player(boxes);
        this.dice = new Dice();
    }

    playTurn() {
        let steps = this.dice.roll();
        this.player.move(steps);

        // wining validation
        if (this.player.position >= this.boxes) {
            console.log(`Llegaste a la casilla ${this.boxes}, ganaste!!`)
            return true;
        }
        return false;
    }
}