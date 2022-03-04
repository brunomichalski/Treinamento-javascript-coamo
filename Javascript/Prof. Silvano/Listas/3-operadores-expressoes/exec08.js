/*
Escreva um programa que faz a leitura de um número (number) em uma variável n1 e o atribui,em cadeia, para outras quatro variáveis (n2, n3, n4e n5). Após, deve imprimir:
a. A soma das duas primeiras variáveis (n1 e n2);
b. A multiplicação das duas seguintes (n3 e n4);
c. O quadrado da última (n5).
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um valor : "));
let n2 = num1;
let n3 = num1;
let n4 = num1;
let n5 = num1;

console.log(num1+ n2);
console.log(n3*n4);
console.log(Math.sqrt(n5));

