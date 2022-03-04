/**
 * Escreva um programa que leia um valor n,
 * inteiro positivo, calcule e mostre a seguinte soma:
 *  S = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n 
 */

const prompt = require("prompt-sync");

function soma() {
    let n = Number(prompt("informe um número inteiro e positivo"))
    let soma = 1;
    if (n >= 0) {
        for (let i = 1; i < + n; i++) {
            soma + soma + (1 / i);
        }
        console.log(soma);
    } else {
        console.log("incorreto");
    }
}

soma();