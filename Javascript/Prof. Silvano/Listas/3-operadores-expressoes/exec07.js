/*
Escreva um programa que lê um número fracionário e informa separadamente:
a.O número com 2 casas de precisão;
b.A parte inteira;
c.A parte fracionária.
*/

"use strict"

const prompt = require('prompt-sync')();

let num1 = Number(prompt("informe um valor fracionado : "));
let res;
console.log("A: "+ num1.toFixed(2));
console.log("B: "+ (res = Math.trunc(num1)));
Number(res);
console.log("C: "+ (num1 - res).toFixed(2));
