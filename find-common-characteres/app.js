/**
 * 
 * @param {array} A 
 * Función principal
 */
function findCommonCharacters(A) {
    if(A.length > 100) {
        return false;
    }//end if

    let string = concat(A);
    return countCharacters(string);
}//end findCommonCharacters

/**
 * 
 * @param {array} array 
 * Convierte las palabras en minúscula
 * y aparte retorna una cadena de string
 * con la palabra completa que almacena el
 * arreglo inicial;
 * A = ['Hola','oso','Hilo']
 * string = 'holaosohilo'
 * 
 */
function concat(array) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i].toLowerCase();
    }//end for i
    return string;
}//end concat

/**
 * 
 * @param {string} string
 * Función que cuenta los caracteres repetidos
 * y al último retorna el arreglo con
 * los caracteres que se repiten en el string
 * 
 */
function countCharacters(string) {
    /**
     * Creo dos arreglos
     * A Retornará el resultado final
     * B Almacenará las palabras que
     * ya hayan pasado en el ciclo
     * o que ya se hayan contado
     */
    let A = [];
    let B = [];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        /**
         * Condición donde verifico que si la palabra ya
         * ha pasado anteriormente en el ciclo se
         * almacene en el arreglo B
         * en caso de que no continua con el proceso
         */
        if(!B.includes(string[i])) {
            /**
             * Inicializo mi variable en 0
             */
            count = 0;
            for (let j = 0; j < string.length; j++) {
                /**
                 *  Comparo cada caracter con la posición i
                 * y la posición j, en caso de ser iguales el
                 * contador aumentará
                 */
                if(string[i] === string[j]) {
                    count++;
                }//end if
            }//end for j
            
            /**
             * Condición que si el contador es mayor o igual a 3
             * y en el arreglo final no se ha almacenado esa palabra
             * de la posición i, entre y lo almacene en el arreglo A
             * de lo contrario no lo almacena por que ya estaba anteriormente
             * y continua con la siguiente vuelta
             */
            if(count >= 3 && !A.includes(string[i])){
                A.push(string[i]);
            }//end if
        }//end if
        else {
            B.push(string[i]);
        }//end else
    }//end for i
    return A;
}//end countCharacteres

console.log(findCommonCharacters(['Hola','oso','Hilo']));