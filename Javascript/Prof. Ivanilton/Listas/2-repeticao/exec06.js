/**
 * Escreva um programa que remova os espaços que possam existir antes e depois de uma
string, bem como espaços duplos encontrados no meio da string
 */

const prompt = require("prompt-sync")();

let frase = prompt("Infome uma frase: ");
let str = "";
for (let i = 0; i < frase.length; i++) {
    if (!(frase[i] == " ")) {
        str += frase[i];
    }
}
console.log(str);