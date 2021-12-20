// Uma empresa contratou funcionários temporários. De acordo com o valor das vendas mensais, 
// os funcionários adquirem pontos que determinarão seus salários ao final de cada mês. 
// Sabe-se que esses funcionários trabalharão por três meses na empresa. Faça um programa que: 
"Use strict"

const prompt = require("prompt-sync")();

class Funcionario {
    codigo;
    nome;

    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
}

class Venda {
    codigo;
    mes;
    valor;

    constructor(codigo, mes, valor) {
        this.codigo = codigo;
        this.mes = mes;
        this.valor = valor;
    }
}

let funcionarios = [];
let vendas = [];

// 1. Cadastre os nomes dos funcionários e suas respectivas vendas mensais; 
let cod = 1;
function cadFuncionarios() {

    let valor, mes;
    let nome = prompt("informe o nome do funcionário: ");

    funcionarios.push(new Funcionario(cod, nome));

    for (let i = 0; i < 3; i++) {
        mes = Number(prompt("Informe o mês da venda: "));
        valor = Number(prompt("Informe o valor da venda: "));

        vendas.push(new Venda(cod, mes, valor));
    }
    cod++;
}

// 2. Calcule e mostre a pontuação geral de cada funcionário nos três meses.
// Sabe-se que R$ 100,00 equivalem a 1 ponto; 
function pt_geral_3mes() {
    for (let i = 1; i <= funcionarios.length; i++) {
        let soma = 0;
        let result = funcionarios.find(elemento => elemento.codigo == i);
        let result2 = vendas.filter(elemento2 => elemento2.codigo == result.codigo);

        console.log(result.nome);
        for (let obj of result2) {
            soma += obj.valor;
        }
        console.log("Pontuação geral dos 3 meses: ", soma / 100);

        soma = 0;
    }
}

// 3. Calcule e mostre a pontuação geral de todos os funcionários a cada mês; 
function pt_geral_all_cada_mes() {
    for (let i = 1; i <= funcionarios.length; i++) {
        let result = funcionarios.find(elemento => elemento.codigo == i);
        let result2 = vendas.filter(elemento2 => elemento2.codigo == result.codigo);

        console.log(result.nome);
        for (let obj of result2) {
            console.log("Pontuação do Mês", obj.mes, " é de :", obj.valor / 100);
        }
    }
}

// 4. Determine e mostre a maior pontuação atingida nos três meses, mostrando o nome do funcionário.
// Em caso de empate, mostre os nomes dos empatados. 
function maior_pontuacao() {
    let maior = 0, n_maior;
    for (let i = 1; i <= funcionarios.length; i++) {
        let soma = 0;
        let result = funcionarios.find(elemento => elemento.codigo == i);
        let result2 = vendas.filter(elemento2 => elemento2.codigo == result.codigo);

        for (let obj of result2) {
            soma += obj.valor;
        }
        if (maior < soma / 100) {
            maior = soma / 100;
            n_maior = result.nome;
        }
        soma = 0;
    }
    console.log("A maior pontuação atingida nos três meses foi: ", maior, " pelo funcionario: ", n_maior);
}

// 5. Determine e mostre o valor total vendido ao longo dos três meses.
function tot_vendido() {
    let soma = 0;
    for (let i = 1; i <= funcionarios.length; i++) {

        let result = funcionarios.find(elemento => elemento.codigo == i);
        let result2 = vendas.filter(elemento2 => elemento2.codigo == result.codigo);

        console.log(result.nome);
        for (let obj of result2) {
            soma += obj.valor;

        }
    }
    console.log("O valor total vendido ao longo dos três meses: R$", soma);
}

function menu() {
    console.log("1 - Cadastrar um Funcionário");
    console.log("2 - Mostre a pontuação geral de cada funcionário nos três meses.");
    console.log("3 - Mostre a pontuação geral de todos os funcionários a cada mês");
    console.log("4 - Mostre a maior pontuação atingida nos três meses");
    console.log("5 - Valor total vendido ao longo dos três meses");
    console.log("7 - Finalizar programa");
    let op = Number(prompt("Qual operação deseja: "));
    return op;
}

let opcao;

do {
    opcao = menu();
    switch (opcao) {
        case 1: cadFuncionarios();
            break;
        case 2: pt_geral_3mes();
            break;
        case 3: pt_geral_all_cada_mes();
            break;
        case 4: maior_pontuacao();
            break;
        case 5: tot_vendido()
            break;
        case 7:
            break;
        default: console.log("Opção invalida!");
            break;
    }
} while (opcao != 7);
