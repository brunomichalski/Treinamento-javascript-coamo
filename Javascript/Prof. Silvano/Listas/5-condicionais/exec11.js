/**
 * Escreva um programa que faz 5 chamadas à função do exercício anterior. 
 * Para cada chamada, deve passar um número randômico entre 1 e 100 e obter o retorno da função.
 *  Ao final, deve informar as quantidades de números (do total de 5 chamadas) que ficaram dentro de cada intervalo. 
Exemplo de saída do programa: 
<< VERIFICA A QUAIS GRUPOS OS NÚMEROS PERTENCEM >> 
Chamada 1: 
Número sorteado 16 -> GRUPO A 
Chamada 2: 
Número sorteado 98 -> GRUPO D 
Chamada 5: 
Número sorteado 7 -> GRUPO A 
Chamada 2: 
Número sorteado 43 -> GRUPO B 
Chamada 2: 
Número sorteado 22 -> GRUPO A 
RESUMO: 3x GRUPO A 
1x GRUPO B 
1x GRUPO D

 */

"use Strict"
const prompt = require('prompt-sync')({ sigint: true })

let a = 0;
let b = 0;
let c = 0;
let d = 0;

function intervalo(x) {
    if ((x >= 1) && (x <= 25)) {
        return a++;
    } else if ((x >= 26) && (x <= 50)) {
        return b++;
    } else if ((x >= 51) && (x <= 75)) {
        return c++;
    } else if ((x >= 76) && (x <= 200)) {
        return d++;
    } else {
        return console.log("OUT");
    }

    console.log();
}

intervalo(Math.random() * 100);
intervalo(Math.random() * 100);
intervalo(Math.random() * 100);
intervalo(Math.random() * 100);
intervalo(Math.random() * 100);

console.log("A: " + a + "X");
console.log("B: " + b + "X");
console.log("C: " + c + "X");
console.log("D: " + d + "X");
