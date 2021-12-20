/**
 * Escreva uma função que recebe um número x e: 
a. Verifica se x está em um dos seguintes intervalos: 
[1..25] e retorna ‘A’; 
[26..50] e retorna ‘B’; 
[51..75] e retorna ‘C’; 
[76..100] e retorna ‘D’; 
Retorna ‘OUT’ se fora dos intervalos. 
 */

"use Strict"
const prompt = require('prompt-sync')({ sigint: true })

let x = prompt("Informe um Numero .:");

function intervalo(x) {
    if ((x >= 1) && (x <= 25)) {
        return console.log("A");
    } else if ((x >= 26) && (x <= 50)) {
        return console.log("B");
    } else if ((x >= 51) && (x <= 75)) {
        return console.log("C");
    } else if ((x >= 76) && (x <= 200)) {
        return console.log("D");
    } else {
        return console.log("OUT");
    }

    console.log();
}

intervalo(x);