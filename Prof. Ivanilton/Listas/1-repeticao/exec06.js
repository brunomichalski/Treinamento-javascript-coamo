/**
 * Uma companhia de teatro deseja dar uma série de espetáculos. A direção calcula que a R$5,00 o ingresso,
 * serão vendidos 120 ingressos, e que as despesas serão de R$200,00.
 * Diminuindo-se R$0,50 o preço dos ingressos espera-se que as vendas aumentem em 26 ingressos.
 * 
 * Escreva um programa que escreva uma tabela de valores de lucros esperados em função do preço do ingresso, 
 * fazendo-se variar esse preço de R$5,00 a R$1,00 de R$0,50 em R$0,50.
 * Escreva, ainda, o lucro máximo esperado,
 * o preço do ingresso e a quantidade de ingressos vendidos para obtenção desse lucro.
 */

const prompt = require("prompt-sync");

function lucro() {
    let preco = 5;
    let disp = 200;
    let ingre = 120;
    let maximo = 0, maxI = 0, maxP = 0;

    console.log("Tabela de Lucro")
    do {
        console.log("ingressos: " + ingre + "| Preco: " + preco + "| Lucro: "+ (ingre * preco - disp));
        preco = preco - 0.5;
        ingre = ingre + 26;

        if(maximo < (ingre * preco - disp)){
            maximo = ingre * preco - disp;
            maxI = ingre;
            maxP = preco;
        }
    } while (preco != 0.5);

    console.log("\n");
    console.log("Lucro Máximo esperado: "+ maximo +"| Preço do ingresso: "+ maxP +"| Quantidade de ingressos vendidos: "+ maxI);
}

lucro();