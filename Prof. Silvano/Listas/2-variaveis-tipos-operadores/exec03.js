"use strict"

const prompt = require('prompt-sync')();

let numero = prompt("informe um número: ");


console.log(`x---------------------------x
| CONVERSÕES DE TIPOS \t    |  
x---------------------------x`)


console.log("Informado.....:" + numero);
console.log("Como número...:" + Number(numero));
console.log("Como booleano.:" + Boolean(numero));
