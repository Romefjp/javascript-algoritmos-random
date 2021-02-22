function metodoBurbuja(arregloNumeros) {
    let numeroTemporal = 0;
    for (let i = 0; i < arregloNumeros.length; i++) {
        for (let j = 0; j < arregloNumeros.length; j++) {
            if(arregloNumeros[j] > arregloNumeros[j+1]) {
                numeroTemporal = arregloNumeros[j];
                arregloNumeros[j] = arregloNumeros[j+1];
                arregloNumeros[j+1] = numeroTemporal;
            }//end if
        }//end for j
    }//end for i
    return arregloNumeros;
}//end metodoBurbuja

console.log(metodoBurbuja([3,1,4,2]));

