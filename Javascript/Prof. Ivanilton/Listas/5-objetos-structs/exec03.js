// Faça um programa que controle o estoque de uma loja de brinquedos. Cada item possui um código, 
// descrição, preço de compra, preço de venda, quantidade em estoque e estoque mínimo. 

"Use strict"

const prompt = require("prompt-sync")();

class Item {
    codigo;
    descricao;
    preco_compra;
    preco_venda;
    qtd_estoque;
    estoque_min;

    constructor(codigo, descricao, preco_compra, preco_venda, qtd_estoque, estoque_min) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco_compra = preco_compra;
        this.preco_venda = preco_venda;
        this.qtd_estoque = qtd_estoque;
        this.estoque_min = estoque_min;
    }
}

// 1. Uma função para cadastrar os produtos no vetor (não permita códigos repetidos); 
let itens = [];
let codigo = 1;
function cadastrarItem() {
    let descricao, preco_compra = 0, preco_venda = 0, qtd_estoque = 0, estoque_min = 0;
    descricao = prompt("Informe o produto: ");
    preco_compra = Number(prompt("Informe o valor do produto: "));
    preco_venda = Number(prompt("Informe o valor da venda: "));
    qtd_estoque = Number(prompt("informe a quantidade em estoque: "));
    estoque_min = Number(prompt("Informe o estoque minimo: "));

    itens.push(new Item(codigo++, descricao, preco_compra, preco_venda, qtd_estoque, estoque_min))

}



// 2. Crie uma função para mostrar o valor do lucro obtido com a venda de um produto e 
// o percentual que esse valor representa. Busque o produto pelo seu código; 

function lucro() {
    let procura = prompt("Informe o produto que deseja: ");

    let result = itens.find(elemento => elemento.descricao == procura);
    if (result) {
        let lucro = result.preco_venda - result.preco_compra;
        console.log(`O lucro obtido com a venda de ${result.descricao} foi de: R$ ${lucro}`);
    }
    else {
        console.log("Não encontrado!");
    }

}

// 3. Crie uma função que mostra os produtos com quantidade em estoque abaixo do estoque mínimo permitindo. 

function estoque() {
    itens.forEach(element => {
        if (element.qtd_estoque < element.estoque_min) {
            console.log(element.descricao + " está abaixo do estoque minimo!");
        }
    });
}


function menu() {
    console.log("1 - Cadastrar um item");
    console.log("2 - Lucro de um produto");
    console.log("3 - estoque dos produtos");
    console.log("0 - Finalizar programa");
    let op = Number(prompt("Qual operação deseja: "));
    return op;
}

let opcao;

do {
    opcao = menu();
    switch (opcao) {
        case 1: cadastrarItem();
            break;
        case 2: lucro();
            break;
        case 3: estoque();
            break;
        case 0:
            break;
        default: console.log("Opção invalida!");
            break;
    }
} while (opcao != 0);
