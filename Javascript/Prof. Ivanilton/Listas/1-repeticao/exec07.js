/**
 * Escreva um programa para calcular o fatorial de n (n!),
 * sendo que o valor inteiro de n é digitado pelo usuário. Sabe-se que: 
  n! = 1 * 2 * 3 * ... * (n -1) * n; 
  0! = 1, por definição 
 */

const prompt = require("prompt-sync");

function Fatorial(fat) {
    let total = fat;
    for (let i = fat - 1; i >= 1; i--) {
        total *= i
    }
    if (fat == 0) {
        console.log("fatorial de 0 é: "+ 1);
    } else {
        console.log("fatorial de " + fat + " é: " + total);
    }
}

let fat = Number(prompt("Informe um número para saber seu fatorial"));

if (fat >= 0) {
    Fatorial(fat);
} else {
    console.log("incorreto");
}
