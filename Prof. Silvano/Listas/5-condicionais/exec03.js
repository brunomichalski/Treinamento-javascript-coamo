/**
 * Escreva um programa que lê um número do terminal e informa se o mesmo é par. 
 * Dica: um número par possui divisão exata por 2, isto é, com resto 0.
 */

 "use Strict"
 const prompt = require('prompt-sync')({sigint: true})
  
 let x = prompt ("Informe um Numero .:");

 if ((x % 2) == 0) {
     console.log(x, " é par")
 } else {
    console.log(x, " é Impar")
 }