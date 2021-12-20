/**
 * Escreva um programa que faz 5 chamadas à função do exercício anterior. 
 * Para cada chamada, deve passar um número randômico entre 1 e 100 e obter o retorno da função. 
 * Ao final, o programa deve informar a quantidade de números (do total de 5 chamadas) que ficaram dentro do intervalo. 
Exemplo de saída do programa: 
<< VERIFICA SE NÚMEROS PERTENCEM AOS INTERVALOS [20..39] E [60..79] >> 
Chamada 1: 
Número sorteado 11 -> FORA! 
Chamada 2: 
Número sorteado 76 -> DENTRO DOS INTERVALOS 
Chamada 5: 
Número sorteado 3 -> FORA! 
Chamada 2: 
Número sorteado 33 -> DENTRO DOS INTERVALOS 
Chamada 2: 
Número sorteado 21 -> DENTRO DOS INTERVALOS 
RESUMO: 3x Números [DENTRO] dos intervalos 
2x Números [FORA] dos intervalos 

 */

"use Strict"
const prompt = require('prompt-sync')({ sigint: true })

let dentro = 0;
let fora = 0;

function retorna(x) {

    if (((x >= 20) && (x <= 39)) || (x >= 60) && (x <= 79)) {
        return dentro++;
    } else {
        return fora++;
    }
}

retorna(Math.random() * 100);
retorna(Math.random() * 100);
retorna(Math.random() * 100);
retorna(Math.random() * 100);
retorna(Math.random() * 100);

console.log("Dentro: " + dentro);
console.log("Fora: " + fora);

