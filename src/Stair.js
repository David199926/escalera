export default class Stair {
    constructor(start, end) {
        if ( start <= 0 ) {
            throw new Error("La escalera debe iniciar en una casilla con número positivo");
        }
        if ( end <= 0 ) {
            throw new Error("La escalera debe terminar en una casilla con número positivo");
        }
        if ( end <= start ) {
            throw new Error("El inicio de la escalera debe estar en una casilla inferior al final");
        }
        this.start = start;
        this.end = end;
    }
}