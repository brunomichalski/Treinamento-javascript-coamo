/*
Escreva um programa que faz a leitura de dois númerose utiliza as funções Math.max() eMath.min() para informar:a. 
O maior número;
b. O menor número
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um valor : "));
let num2 = Number(prompt("informe outro valor : "));

console.log("Maior: "+ Math.max(num1,num2));
console.log("Menor: "+ Math.min(num1, num2));
