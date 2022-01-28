export default class Snake {
    constructor(head, tail) {
        if ( tail <= 0 ) {
            throw new Error("La serpiente debe terminar en una casilla con número positivo");
        }
        if ( head <= 0 ) {
            throw new Error("La serpiente debe iniciar en una casilla con número positivo");
        }
        if ( tail >= head ) {
            throw new Error("La cabeza de la serpiente debe estar en una casilla superior a la cola");
        }
        this.head = head;
        this.tail = tail;
    }
}