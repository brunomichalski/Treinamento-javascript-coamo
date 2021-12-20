/**
 * Escreva um programa que peça dois números, base e expoente, 
 * calcule e mostre o primeiro número elevado ao segundo número.
 * Não utilize a função de potência da linguagem
 */

const prompt = require("prompt-sync");

function Calculo(n1, n2) {
    let total = 0;
    for (let i = 1; i <= n2; i++) {
      if (i == 1) {
          total = n1*n1;
          i++;
      }else{
          total = total * n1;
      }
    }
    console.log(`${n1} elevado a ${n2} é igual a: ${total}`)
}

let n1 = Number(prompt("informe a base"));
let n2 = Number(prompt("informe o expoente"));

if (n1 >= 0 && n2 >= 0) {
    Calculo(n1, n2);
} else {
    console.log("incorreto");
}