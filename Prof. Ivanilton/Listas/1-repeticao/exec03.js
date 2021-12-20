/**
 * Escreva um programa que receba dois números inteiros e gere os números inteiros 
 * que estão no intervalo compreendido por eles
 */

const prompt = require("prompt-sync");

function NumInt(n1, n2) {
    if (n1 >= 0 && n1 % 1 == 0 && n2 >= 0 && n2 % 1 == 0) {
        let menor, maior;
        if (n1 < n2) {
            menor = n1;
            maior = n2;
        } else {
            menor = n2;
            maior = n1;
        }

        for (let i = menor; i <= maior; i++) {
            console.log(i);
        }
    } else {
        console.log("incorreto");
    }
}

let n1 = Number(prompt("informe um número inteiro e positivo"))
let n2 = Number(prompt("informe um número inteiro e positivo"))

NumInt(n1, n2);