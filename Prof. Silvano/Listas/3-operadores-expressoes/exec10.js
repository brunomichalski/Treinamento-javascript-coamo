/*
Escreva um programa que faz a leitura de três númerose utiliza as funções Math.max() eMath.min() para informar:
a. O maior número;
b. O menor número.
OBS: Não é permitido utilizar passar mais de 2 parâmetrospara as funções min() ou max()
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um valor : "));
let num2 = Number(prompt("informe outro valor : "));
let num3 = Number(prompt("informe um terceiro valor : "));

let maior = Math.max(num1, num2);
maior = Math.max(maior,num3)
let menor = Math.min(num1, num2);
menor = Math.min(menor, num3)

console.log("Maior: "+ maior);
console.log("Menor: "+ menor);

