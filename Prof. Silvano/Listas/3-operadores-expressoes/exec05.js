/*
Escreva um programa que lê três números inteiros (a,b e c) e informa:
a.A média aritmética simples dos três valores.
b.A média ponderada dos três valores, considerando comopesos 10% (a), 50% (b) e 40% (c)
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um número: "));
let num2 = Number(prompt("informe um segundo número: "));
let num3 = Number(prompt("informe um terceiro número: "));

let media = (num1 + num2 + num3) / 3;
let mediaP = (num1 * 0.1) + (num2 * 0.5) + (num3 * 0.4);

console.log("Média: ", media);
console.log("Média Ponderada: ", mediaP);
 