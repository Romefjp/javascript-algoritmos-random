class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };//end constructor
};//end class Node

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        if(this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }//end if
        else {
            this.head = newNode;
            this.tail = newNode;
        }//end else
        this.size++;
    };

    addToTail(data) {
        const newNode = new Node(data, null, this.tail)
        if(this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }//end else
        else {
            this.tail = newNode;
            this.head = newNode;
        }//end else
        this.size++;
    };

    insertAt(data, index) {
        if(index < 0 || index > this.size) {
            return null;
        }//end if

        const newNode = new Node(data, null, null);
        if(index == 0) { //Si se inserta como cabeza
            newNode.next = this.head; //no colocamos la variable current sino directamente la referencia a la cabecera
            this.head.prev = newNode; //el previo de la actual cabecera ya no será null, sino sera nuestro nuevo nodo cabeza
            this.head = newNode; //cambiamos la referencia de la cabeza actual a nuestro nuevo nodo
        }//end if
        else if (index === this.size) { //Si se inserta como cola (en la última posición existente)
            newNode.prev = this.tail; //el anterior de nuestro nuevo nodo será la actual cola
            this.tail.next = newNode; //la referencia de siguiente de nuestra actual cola será nuestro nuevo nodo
            this.tail = newNode; //cambiamos la referencia de la cola actual a nuestro nuevo nodo
        }//end else if
        else { //Si se inserta en medio de dos posiciones
            let current = this.head; //nodo al que vamos a reemplazar de posición, se inicializa en el nodo de posición cero, osea la cabeza
 
            for(let i = 0; i < index; i++) {
                current = current.next; //se avanza de nodo hasta llegar a la posición que reemplazamos por nuestro nuevo nodo
            }//end for i
 
            let previous = current.prev; //nodo anterior al de la posición que reemplazamos /  = current.prev
 
            newNode.next = current; //el siguiente del nuevo nodo es el que ocupaba la posición que reemplazamos
            newNode.prev = previous; //el anterior del nuevo nodo es el anterior del que ocupaba la posición que reemplazamos
            current.prev = newNode;
            previous.next = newNode;
        }//end else
        this.size++;
    };

    removeFromHead() {
        if(!this.head) {
            return null;
        }//end if
        const valueToReturn = this.head.data;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }//end if
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }//end else
        this.size++;
        return valueToReturn;
    };

    removeFromTail() {
        if(!this.tail){
            return null;
        }//end if
        const valueToReturn = this.tail.data;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }//end if
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }//end else
        this.size++;
        return valueToReturn;
    };

    removeData(data){
        let current = this.head;
        let previous = null;
        while(current !== null) {
            if(current.data === data) {
                if(!previous) {
                    return this.removeFromHead();
                }
                else if(!current.next){
                    return this.removeFromTail();
                }//end else if
                else {
                    previous.next = current.next;
                    current.next.prev = previous;
                }//end else
                this.size--;
                return current.data;
            }//end if
            previous = current;
            current = current.next;
        }//end else
        return null;
    }

    print() {
        let current = this.head;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.next;
        }//end while
        return result += ' X ';
    };

    reversePrint() {
        let current = this.tail;
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.prev;
        }//end while
        return result += 'X';
    };

    getSize() {
        return this.size;
    };
    isEmpty() {
        return this.size === 0;
    };

};

const ld = new DoubleList();
ld.addToHead(4);
ld.addToHead(3);
ld.addToHead(5);
ld.addToTail(6);
ld.addToTail(8);
ld.addToTail(9);
ld.insertAt(10, 2);
// console.log(ld.removeFromHead());
// console.log(ld.removeFromTail());
console.log(ld.print());
ld.removeData(4);
console.log(ld.print());
// console.log(ld.reversePrint());
// console.log(ld);