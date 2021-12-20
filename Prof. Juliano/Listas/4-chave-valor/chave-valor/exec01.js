/**
 * João, do Exemplo 2 da aula (Listas de Compras), percebeu que vai ser mais fácil
 *  encontrar grupos menores de pessoas que querem comprar as mesmas coisas.
 *  Para que haja descontos significativos para as pessoas que querem comprar o mesmo produto,
 *  deve haver um mínimo de X pessoas que querem o mesmo produto. 
 * 
 * Implemente a função produtos_em_comum(listas_de_compras, x),
 *  que recebe um vetor de listas de compras (que são vetores dos nomes dos produtos) e um número x, 
 * que indica o número mínimo de pessoas que devem querer algum produto.
 *  Esta função deve retornar um vetor de objetos, 
 * tal que cada objeto contém o nome do produto e o número de pessoas que querem comprá-lo. 
 * Por exemplo, a chamada 
 * produtos_em_comum([["celular", "televisão", "computador"], 
["celular", "secador de cabelo", "televisão", "carteira"],
 ["mouse", "teclado", "computador", "celular"]], 2) 

deve retornar o array de objetos: 
[{produto:"celular", qtde: 3},
 {produto:”computador”, qtde : 2},
  {produto: "computador", qtde : 2}] 
DICA: Use um Map para registrar quantas pessoas querem cada produto! 
 */

"use strict";

function produtos_em_comum(listas_de_compras, num) {
    let produtos = new Map();
    for (let i = 0; i < listas_de_compras.length; i++) {
        for (const el of listas_de_compras[i]) {
            const cont = produtos.get(el)
            if (cont == undefined) {
                produtos.set(el, 1)
            }
            else {
                produtos.set(el, cont + 1)
            }
        }
    }

    let v = []
    for (const par of produtos) {
        const [palavra, cont] = par
        if (cont >= num) {
            v.push({ Produto: palavra, Qtde: cont })
        }
    }
    return v;
}

let prod = produtos_em_comum([
    ["celular", "televisão", "computador", "celular"],
    ["celular", "secador de cabelo", "carteira"],
    ["mouse", "teclado", "computador", "celular", "celular"]], 2)

console.log(prod)

