export default class Player {

    constructor(maxPosition) {
        this.position = 0;
        this.maxPosition = maxPosition;
    }

    /**
     * Moves to certain position
     * @param {number} steps 
     */
    move(steps) {
        let rest = this.maxPosition - this.position;
        if (rest < steps) {
            this.position += rest;
        } else {
            this.position += steps;
        }
        console.log("Posicion actual " + this.position)
    }

    /**
     * Moves player to certain position
     * @param {number} position 
     */
    moveTo(position) {
        if (position < this.maxPosition) {
            this.position = position;
            console.log("Posicion actual " + this.position)
        } else {
            console.log("La posición tiene que ser menor o igual a " + this.maxPosition)
        }
    }

}