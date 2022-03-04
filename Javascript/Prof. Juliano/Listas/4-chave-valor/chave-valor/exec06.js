/**
 *  A mãe de Joaquim pediu a ele que fosse ao supermercado e deu pra ele uma lista de compras. 
 * Joaquim voltou pra casa com algumas sacolas de compras. 
 * Ajude a mãe de Joaquim a conferir se ele trouxe tudo que ela pediu. 
 * Para isso, faça uma função comprou_tudo(sacola, lista_de_compras) 
 * que retorna true se todos os elementos do vetor lista_de_compras estão na sacola, ou false, caso contrário. 
Exemplo: Se sacola = ['banana', 'maçã', 'chocolate', 'leite', 'pão', 'pé de moleque', 'café']
 e lista_de_compras = ['banana', 'maçã', 'leite', 'pão', 'café'],
  a função retorna true, pois todos os itens da lista de compras estão na sacola!

 */

"use strict";


function comprou_tudo(lista_compra, sacola) {
    let cont = 0;
    for (let i = 0; i < sacola.length; i++) {
        let array = sacola[i];
        if (lista_compra.includes(array)) {
            cont++;
        }
    }
    if (cont == (lista_compra.length)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
let lista = ['banana', 'maçã', 'leite', 'pão', 'café'];
let sacola = ['banana', 'maçã', 'chocolate', 'leite', 'pão', 'pé de moleque', 'café'];

comprou_tudo(lista, sacola)
