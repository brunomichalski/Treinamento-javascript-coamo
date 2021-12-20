/*
Escreva um programa que lê o valor de um produto ecalcula:
a.O valor à vista e o desconto (15% de desconto).
b.O valor à prazo, com juros de 20% sobre o valor totale em 12x parcelas iguais.
    i.Informar os valores total e da parcela.
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe o valor do produto: "));
let total;
console.log("Valor a vista: "+ num1 + " Valor com 15% de desconto: "+ (num1 - (num1 * 0.15)));
console.log("Valor a prazo: "+ (total = num1 + (num1 * 0.2)));
console.log("Valor da parcela(12x): "+ total /12);
