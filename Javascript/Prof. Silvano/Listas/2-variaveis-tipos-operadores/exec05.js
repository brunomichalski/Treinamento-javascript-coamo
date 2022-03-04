"use strict"

const prompt = require('prompt-sync')();

let nomeProd = prompt("Informe o nome do produto: ");
let mes = prompt("Informe o mês do produto: ");
let ano = prompt("Informe o ano de vencimento: ");
let perecivel = prompt("Informe se é perecível:(sim / nao): ");

//ternário
(perecivel == "sim" ? perecivel = true : perecivel = false);

console.log(`${String(nomeProd)} ${Number(mes)} ${Number(ano)} ${Boolean(perecivel)}`);