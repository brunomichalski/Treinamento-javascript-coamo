/**
 * Escreva um programa que receba uma string composta de várias palavras. A função deve
modificar a letra inicial de cada palavra para maiúscula e, as demais, para minúsculas. Considere
que sempre haverá ao menos um espaço entre cada palavra
 */

const prompt = require("prompt-sync")();

let frase = prompt("Infome uma frase: ");
let str = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] == frase[0]) {
        str = frase[i].toUpperCase();
    }else if(frase[i] == " "){
        str += " ";
        str += frase[i+1].toUpperCase();
        i++;
    }else{
        str += frase[i].toLowerCase();
    }
}

console.log(str);