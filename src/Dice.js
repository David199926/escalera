export default class Dice {
    constructor() {}

    /**
     * Rolls the dice
     * @returns {number} result
     */
    roll() {
        let result = Math.ceil(1 + Math.random() * 5);
        console.log("Dado arroja " + result)
        return result;
    }
}