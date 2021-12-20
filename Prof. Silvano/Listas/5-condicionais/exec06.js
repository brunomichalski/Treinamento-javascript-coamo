/**
 * Escreva uma função que recebe três números (a, b e c) e devolve o menor.
 *  Não é permitido o uso das funções Math.max() e Math.min(). 
 */

 "use Strict"
 const prompt = require('prompt-sync')({ sigint: true })
 
 let n1 = prompt("Informe um Numero .:");
 let n2 = prompt("Informe outro Numero .:");
 let n3 = prompt("Informe outro Numero .:");
 let menor;

 if (n1 < n2) {
     menor = n1;
 } else {
     menor = n2;
 }
 if (n3 < menor) {
     menor = n3;
 }

 console.log(menor ," é o menor!")