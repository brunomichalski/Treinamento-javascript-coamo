/**
 * Escreva um programa que lê um número x do terminal e informa seu valor absoluto |x|, isto é: 
 * a. |x| = x, se x ≥ 0 
 * b. |x| = -x, se x < 0 
 */

 "use Strict"
 const prompt = require('prompt-sync')({sigint: true})
  
 let x = prompt ("Informe um Numero .:");

 if (x >= 0) {
     console.log("Positivo: ",x);
 } else {
    console.log("negativo: ",x);
 }
  