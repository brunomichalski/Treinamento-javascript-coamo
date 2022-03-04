/**
 * Uma loja utiliza o código V para pagamentos à vista e P para pagamentos a prazo.
 * Escreva um programa que receba o código e o valor de 15 vendas. Calcule e mostre:
a. O valor total das vendas à vista;
b. O valor total das vendas a prazo;
c. O valor total das vendas efetuadas;
 */

const prompt = require("prompt-sync");

let total = 0, totAvista = 0, totAprazo = 0;

function venda(valor, cod) {
    let vAvista = 0, vAprazo = 0;

    if (cod == "V") {
        vAvista = valor;
    } else if(cod == "P"){
        vAprazo = valor;
    }
    return [vAvista, vAprazo];
}

for (let i = 1; i <= 3; i++) {
    let avista = 0, aprazo = 0;
    let v = Number(prompt("Informe o valor da venda: "));
    let cod = prompt("informe o código(V: A vista/ P: a prazo)");

    if (v >= 0 && cod == "P" || cod == "V") {
        [avista, aprazo]  = venda(v, cod);
        total += avista + aprazo;
        totAvista += avista;
        totAprazo += aprazo;
    } else {
        console.log("incorreto");
        break;
    }
}

console.log("Valor À vista: "+ totAvista);
console.log("Valor À prazo: "+ totAprazo);
console.log("Total das vendas: "+ total);
