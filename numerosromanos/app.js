/*
        I => 1
        V => 5
        X => 10
        L => 50
        C => 100
        D => 500
        M => 1000
*/

function numerosRomanos(numero) {
    if(numero > 0 && numero < 4000) {
        let resultado = '';
        let numeroString = numero+'';
        if(numeroString.length === 1) {
            resultado+=unidades(numero);
        }//end if
        else if(numeroString.length === 2) {
            if(parseInt(numeroString[1]) === 0) {
                resultado += decenas(numero);
            }//end if
            else {
                resultado += decenas(parseInt(numeroString[0]+'0'))+unidades(parseInt(numeroString[1]));
            }//end else
        }//end else if
        else if(numeroString.length === 3) {
            if(parseInt(numeroString[1]) === 0 && parseInt(numeroString[2]) === 0) {
                resultado += centenas(numero);
            }//end if
            else {
                resultado += centenas(parseInt(numeroString[0]+'00'))+decenas(parseInt(numeroString[1]+'0'))+unidades(parseInt(numeroString[2]));
            }//end else
        }//end else 
        else {
            if(parseInt(numeroString[1]) === 0 && parseInt(numeroString[2]) === 0 && parseInt(numeroString[3]) === 0) {
                resultado += unidadesDeMillar(numero);
            }//end if
            else {
                resultado += unidadesDeMillar(parseInt(numeroString[0]+'000'))+centenas(parseInt(numeroString[1]+'00'))+decenas(parseInt(numeroString[2]+'0'))+unidades(parseInt(numeroString[3]));
            }///end else
        }//end else
        return resultado;
    }//end if
    else {
        return 'No existe el número romano';
    }//end else
}//end numerosRomanos

function unidades(numero) {
    let resultado = '';
    switch (numero) {
        case 1:
        case 2:
        case 3:
            for (let i = 0; i < numero; i++) {
                resultado+='I';
            }//end for i
            return resultado;
            break;
        case 4: 
            return 'IV';
            break;
        case 5: 
        case 6: 
        case 7: 
        case 8: 
            resultado += 'V';
            for (let i = 0; i < (numero-5); i++) {
                resultado+='I';
            }//end for
            return resultado;
            break;
        case 9: 
            return 'IX';
            break;
        default:
            return '';
            break;
    }//end switch
}//end unidades

function decenas(numero) {
    let resultado = '';
    switch (numero) {
        case 10: 
        case 20: 
        case 30: 
            for (let i = 0; i < ((numero+'')[0]); i++) {
                resultado+='X';
            }//end for
            return resultado;
            break;
        case 40:
            return 'XL';
            break;
        case 50:
        case 60:
        case 70:
        case 80:
            resultado += 'L';
            for (let i = 0; i < (parseInt((numero+'')[0])-5); i++) {
                resultado+='X';
            }//end for
            return resultado;
            break;
            break;
        case 90:
            return 'XC';
            break;
        default:
            return '';
            break;
    }//end switch
}//end decenas

function centenas(numero) {
    let resultado = '';
    switch (numero) {
        case 100:
        case 200:
        case 300:
            for (let i = 0; i < (parseInt((numero+'')[0])); i++) {
                 resultado+='C';
            }//end for i
            return resultado;
            break;
        case 400:
            return 'CD';
            break;
        case 500:
        case 600:
        case 700:
        case 800:
            resultado+='D';
            for (let i = 0; i < ((parseInt((numero+'')[0]))-5); i++) {
                resultado+='C';
            }//end for i
            return resultado;
            break;
        case 900:
            return 'CM';
            break;
        default:
            return '';
            break;
    }//end switch
}//end centenas

function unidadesDeMillar(numero) {
    let resultado = '';
    switch (numero) {
        case 1000:
        case 2000:
        case 3000:
            for (let i = 0; i < (parseInt((numero+'')[0])); i++) {
                resultado+='M';
            }//end for i
            return resultado;
            break;
    
        default:
            return '';
            break;
    }
}//end unidadesDeMillar


for (let i = 0; i < 4000; i++) {
    console.log(i+' -> '+numerosRomanos(i));
}//end for i