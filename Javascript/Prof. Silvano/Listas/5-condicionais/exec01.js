/* exc1. Escreva um programa que lê um número x do terminal:
a. Se x por positivo, informa sua raiz quadrada (√x);
b. Caso contrário, informa o seu quadrado (x2).
*/
 
"use Strict"
const prompt = require('prompt-sync')({sigint: true})
 
let x = prompt ("Informe um Numero .:");
 
if (x >= 0) {
console.log ("A raiz quadrada do numero é..:", Math.sqrt(x));
}else {
console.log ("O numero ao quadrado..:" ,(x **2))
}