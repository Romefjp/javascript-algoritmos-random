const removeElement = (array, number) => {
    /**
     * Función filter: Crea un nuevo arreglo con los elementos que cumplan
     * una condición
     */
    // array = array.filter(item => item !== number);

    /**
     * Método splice cambia el contenido de una serie eliminando elementos
     * existentes y/o agregando nuevos elementos.
     */
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i] === number) {
    //         array.splice(i,1);
    //     }//end if
    // }//end for i

    /**
     * Mi método
     */
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== number) {
            result += array[i];
        }//en if
    }//end for i

    array = [];
    for (let i = 0; i < result.length; i++) {
        array.push(parseInt(result[i]));
    }//end for
    
    return array;
};//end removeElement


console.log(removeElement([1,2,4,2,5], 2));