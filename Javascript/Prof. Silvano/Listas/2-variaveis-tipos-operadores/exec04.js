"use strict"

const prompt = require('prompt-sync')();

let pNome = prompt("informe o primeiro nome: ");
let mNome = prompt("informe o nome do meio: ");
let uNome = prompt("informe o último nome: ");

let nomeCompletoConcat = pNome+" "+mNome+" "+uNome;
let nomeCompletoTemplate = `${pNome} ${mNome} ${uNome}`;

console.log("Concatenação: " + nomeCompletoConcat);
console.log("Template....: " + nomeCompletoTemplate);