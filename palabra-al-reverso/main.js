/**
 * Dada alguna oraxión se tiene que invertir
 * @param {'Alguna palabra invertida'} sentence 
 * resultado = 'invertida palabra Alguna'
 */

function reverseSentence(sentence) {
    let arrayString = splitTest(sentence);
    let resultado = '';
    for(let i = (arrayString.length-1); i >= 0; i--) {
        resultado += arrayString[i]+(i === 0 ? '' : ' ');
    }//end for i
    return resultado;
}//end reverseSentence

function splitTest(sentence) {
    let i = 0;
    let resultado = [];
    let palabra = '';
    while(sentence.length > i) {
        if(sentence[i] === ' ') {
            resultado.push(palabra);
            palabra = '';
        }//end if
        else {
            palabra += sentence[i];
        }//end else
        i++;
    }//end while
    resultado.push(palabra);
    return resultado;
}//end spilitTest