/**
 * Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código.
 *  Os códigos utilizados são: 
● 1, 2, 3, 4 – Votos para os candidatos 
● 5 – Voto nulo 
● 6 – Voto branco 
Elabore um programa que calcule e mostre: 
● O total de votos para cada candidato; 
● O total de votos nulos; 
● O total de votos em branco; 
● A porcentagem de votos nulos sobre o total de votos; 
● A porcentagem de votos brancos sobre o total de votos;

 */

const prompt = require("prompt-sync");

function votacao() {
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0;
    let voto = 0;
    let contN = 0, contB = 0;
    let total = 0;
    do {
        voto = Number(prompt("Informe o seu voto(Cadidatos - 1, 2, 3, 4 / 5 - Nulo / 6 - Branco \n Infome 0 para finalizar"));
        if (voto >= 0  && voto <= 6) {
            if (voto == 1) {
                cand1++;
            } else if (voto == 2) {
                cand2++;
            } else if (voto == 3) {
                cand3++;
            } else if (voto == 4) {
                cand4++;
            } else if (voto == 5) {
                contN++;
            } else if (voto == 6){
                contB++;
            }
        } else {
            console.log("incorreto");
            return;
        }
        
    } while (voto != 0);

    total = cand1 + cand2 + cand3 + cand4 + contN + contB;
    let percN = (100 * contN) / total;
    let percB = (100 * contB) / total;
    console.log("O total de Votos para o candidato 1 é: "+ cand1);
    console.log("O total de Votos para o candidato 2 é: "+ cand2);
    console.log("O total de Votos para o candidato 3 é: "+ cand3);
    console.log("O total de Votos para o candidato 4 é: "+ cand4);
    console.log("O total de Votos nulos são: "+ contN);
    console.log("O total de Votos brancos são: "+ contB);
    console.log("A porcentagem de Votos nulos sobre o total de votos são: "+ percN.toFixed(2) +"%");
    console.log("A porcentagem de Votos brancos sobre o total de votos são: "+ percB.toFixed(2) +"%");
}

votacao();