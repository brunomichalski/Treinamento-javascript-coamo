/**
 * Faça um programa que leia uma matriz A 12x4 com os valores das vendas de uma loja,
 *  onde cada linha representa um mês do ano e cada coluna representa uma semana do mês. 
 * Calcule e mostre: 
● o total vendido em cada mês do ano; 
● o total vendido em cada semana durante todo o ano; 
● o total vendido pela loja no ano

 */

"use strict"

const prompt = require("prompt-sync")();

let matA = [];

for (let i = 0; i < 12; i++) {
    matA[i] = [];
    for (let j = 0; j < 4; j++) {
        matA[i][j] = Number(prompt("Informe um valor para a matriz"))
    }
}

//o total vendido em cada mês do ano; 
console.log("Vendas em cada MÊS do ano: ")
let soma = 0;
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
        soma += matA[i][j];
    }
    console.log("R$: ", soma);
}

//o total vendido em cada semana durante todo o ano;
console.log("Vendas em cada SEMANA do ano: ")
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
        console.log("R$: ", matA[i][j]);
    }
}

//o total vendido pela loja no ano.
console.log("Vendas do ANO: ")
soma = 0;
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
        soma += matA[i][j];
    }
    
}
console.log("R$: ", soma);
