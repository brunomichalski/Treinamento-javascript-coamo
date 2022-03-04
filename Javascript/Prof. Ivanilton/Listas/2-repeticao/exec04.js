/**
 *  Escreva um programa que conta e imprime no terminal o número de palavras em uma string.
Considere que haverá somente um espaço entre as palavras.

 */

const prompt = require("prompt-sync")();

let frase = String(prompt("Infome uma frase: "));
let cont = 0;
for (let i = 0; i < frase.length; i++) {
    if (i > 0 && frase[i] == " " && i < frase.length -1) {
        cont++;
    }
    
}
console.log("O número de palavras na String é "+ Number(cont+1));