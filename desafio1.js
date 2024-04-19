const seedrandom = require('seedrandom');

// Funcion que genera el arreglo con la semilla 1763519
function generarArray(array) {
    const random = seedrandom('1763519');
    let i = 0;
    for (; i < 1000000; i++) {
        array.push(random.int32());
    }
}

// Funcion que cuenta los numeros positivos Punto 3
function cuantos_positivos(array) {
    let positivo = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 0 ) {
            positivo ++;}
    }
    return positivo;
}

// Funcion que cuenta los numeros negativos Punto 4
function cuantos_negativos(array) {
    let negativo = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            negativo ++;}
    }
    return negativo;
}

// Funcion que busca si el arreglo contiene un 0
function buscarCero(array) {
    return array.includes(0);
}

// Funcion que cuenta los numeros divisibles por 7 Punto 5
function divisibles_7(array) {
    let divisibles = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 7 === 0 || array[i] % 7 === 3 || array[i] % 7 === 5 || array[i] % 7 === 6) {
            divisibles ++;
        }
    }
    return divisibles;
}

// Funcion que cuenta cuantas decenas hay en el arreglo Punto 6
function contarDecenas(array) {
    let decenas = Array(10).fill(0);
    for (let i = 0; i < array.length; i++) {
        let numero = Math.floor(array[i] / 10) % 10;
        if (numero === 0 || numero === (-0) ) {
            decenas[0]++;
        } else if (numero === 1 || numero === (-1)) {
            decenas[1]++;
        } else if (numero === 2) {
            decenas[2]++;
        } else if (numero === 3) {
            decenas[3]++;
        } else if (numero === 4) {
            decenas[4]++;
        } else if (numero === 5) {
            decenas[5]++;
        } else if (numero === 6) {
            decenas[6]++;
        } else if (numero === 7) {
            decenas[7]++;
        } else if (numero === 8) {
            decenas[8]++;
        } else if (numero === 9) {
            decenas[9] += 1;
        }
    }
    return decenas;
}

// Funcion que halla la posicion +1 del menor numero del arreglo Punto 7
function hallarPosicionMenor(array) {
    let menor = array[0];
    let posicion = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            posicion = i;
        }
    }
    return posicion;
}

// Funcion que encuentra el numero mas pequeño del arreglo sin ordenarlo
function ordenar(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}

// Funcion que cuenta numeros positivos o negativos seguidos Punto 8

function contar(array) {
    let seguido = 0;
    for (let i = 1; i < array.length; i++) {
        if ((array[i-1] > 0 && array[i] > 0) || (array[i-1] < 0 && array[i] < 0)) {
            seguido ++;
        }
    }
    return seguido;
}

// Funcion que calcula el promedio de los numeros de exactamente 6 digitos Punto 9
function promedio_6_digitos(array) {
    let total = 0;
    let cantidad = 0;
    for (let i = 0; i < array.length; i++ ){
        if (array[i].toString().length === 6){
            total += array[i];
            cantidad ++;
        }
    }
    return calcularPromedio(total, cantidad, 'No hay numeros de 6 digitos');
}

// Funcion que calcula el promedio
function calcularPromedio(total, cantidad, mensaje){
    if (cantidad > 0) {
        return Math.round(total / cantidad);
    }
    else {
        return mensaje;
    }
}

// Variables
let array = [10, 11, 12, -10, -10, 1, -1, -1, 1, 1, 1];
let positivo = cuantos_positivos(array);
let negativo = cuantos_negativos(array);
let divisibles = divisibles_7(array);
let posicion = hallarPosicionMenor(array);
let menor = ordenar(array);
let decena = contarDecenas(array);

// Llamado de funciones
// generarArray(array);

// Impresion de resultados
console.log('Largo del arreglo: ' + array.length);
console.log('Positivos: ' + positivo);

console.log('Negativos: ' + negativo);
console.log('Contiene 0: ' + buscarCero(array));
console.log('Divisibles por 7: ' + divisibles);
console.log(`${menor}:${posicion + 1}`);
console.log('Decena: ' + decena);
console.log('Promedio de 6 digitos: ' + promedio_6_digitos(array));
console.log('Seguidos: ' + contar(array));


