"Use strict"

const prompt = require("prompt-sync")();

// Uma empresa deseja controlar as vendas realizadas por seus vendedores a cada mês,
//  durante um ano inteiro. Sabe-se que nessa empresa existem quatro vendedores. 
//  É importante que esse controle seja automatizado porque muitas consultas devem ser respondidas imediatamente. 
//  O gerente precisa de um meio para cadastrar as vendas de todos os vendedores e, 
//  depois, precisa ver um menu, contendo as seguintes opções: 

//Classes-----------------------------------------------------------
class Vendedor {
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
    venda = 0;

    constructor(codigo, mes, venda) {
        this.codigo = codigo;
        this.mes = mes;
        this.venda = venda;
    }
}
//-----------------------------------------------------------------------------

let vendedores = [];
let vendas = [];


//Funções----------------------------------------------------------
//------------------------------------------------------------------
//Menu---------------------------------------------------------------
function menu() {
    console.log("1 - Cadastrar um Vendedor");
    console.log("2 - Cadastrar a venda");
    console.log("3 - Consultar vendas de um funcionário em um mês");
    console.log("4 - Total de vendas de um vendedor");
    console.log("5 - Vendedor que mais vendeu em um determinado mês");
    console.log("6 - Mês com mais vendas");
    console.log("7 - Finalizar programa");
    let op = Number(prompt("Qual operação deseja: "));
    return op;
}

//-----------------------------------------------------------------------
// Na opção 1: deve-se cadastrar vendedores, sendo que não pode existir dois vendedores com o mesmo código. 
function cadastrarVendedor(codigo) {
    let n = prompt("Nome do Vendedor: ");
    vendedores.push(new Vendedor(codigo, n));
}

// Na opção 2: deve-se cadastrar vendas, informar o código do vendedor e o mês das vendas,
// mas não podem existir duas vendas para o mesmo vendedor no mesmo mês. 
function cadastrarVenda() {
    console.log(vendedores);
    let cod = Number(prompt("Informe o código do vendedor: "));
    let mes = Number(prompt("Informe o mes da venda(1-12): "));
    let venda = Number(prompt("Informe o número de vendas: "));
    if (mes < 1 && mes > 12) {
        console.log("Mês Inválido!")
    } else {
        vendas.push(new Venda(cod, mes, venda));
    }
}

// Na opção 3: deve-se informar o número do vendedor e o número do mês que se deseja consultar,
// para então descobrir e mostrar esse valor. 
function consult_vendas() {
    console.log(vendedores);
    let cod = Number(prompt("Informe o código do vendedor: "));
    let mes = Number(prompt("Informe o mes da venda(1-12) que deseja consultar: "));

    let result = vendedores.find(elemento => elemento.codigo == cod);
    let result2 = vendas.find(elemento2 => (elemento2.codigo == result.codigo) && (elemento2.mes == mes));

    console.log(result.nome, " realizou ", result2.venda, " vendas no mês ", result2.mes);
}

// Na opção 4: deve-se informar o número do vendedor desejado, calcular e mostrar o total de suas vendas. 
function tot_vendedor() {
    let soma = 0;
    console.log(vendedores);
    let cod = Number(prompt("Informe o código do vendedor para saber seu total de vendas: "));

    let result = vendedores.find(elemento => elemento.codigo == cod);
    let result2 = vendas.filter(elemento2 => (elemento2.codigo == result.codigo));

    console.log(result.nome);
    for (let obj of result2) {
        soma += obj.venda;
    }
    console.log("total de suas vendas: ", soma);

    soma = 0;
}

// Na opção 5: deve-se informar o número do mês que se deseja pesquisar,
// para então descobrir e mostrar o número do vendedor que mais vendeu nesse mês. 
function maior_venda_mes() {
    let num = 0;
    let venda = 0;
    let mes = Number(prompt("Informe o Mês para mostrar o número do vendedor que mais vendeu nesse mês: "));


    let result2 = vendas.filter(elemento2 => (elemento2.mes == mes));
    let result;
    for (let obj of result2) {
        result = vendedores.find(elemento => elemento.codigo == obj.codigo);
        if (venda < obj.venda) {
            venda = obj.venda
            num = result.codigo;
        }
    }
    console.log("O vendedor que mais vendeu no Mês", mes, " foi o de código: ", num);
}

// Na opção 6: deve-se descobrir e mostrar o mês com maior venda. 
function mes_maior_vendas() {
    let mes = 0;
    let tot_venda_mes = 0;
    let total = 0;
    let result2;
    for (let i = 1; i <= 12; i++) {
        result2 = vendas.filter(elemento2 => (elemento2.mes == i));
        for (let obj of result2) {
            if (obj.mes == i) {
                tot_venda_mes += obj.venda;
            }
        }
        if (total < tot_venda_mes) {
            mes = i;
            total = tot_venda_mes;
        }
        tot_venda_mes = 0;
    }
    console.log("O Mês com maior número de vendas é: ", mes, "com o número de ", total, " vendas.");
}

// Na opção 7: o programa termina. 

let opcao;
let codigo = 1;

do {
    opcao = menu();
    switch (opcao) {
        case 1: cadastrarVendedor(codigo++);
            break;
        case 2: cadastrarVenda();
            break;
        case 3: consult_vendas();
            break;
        case 4: tot_vendedor();
            break;
        case 5: maior_venda_mes();
            break;
        case 6: mes_maior_vendas();
            break;
        case 7:
            break;
        default: console.log("Opção invalida!");
            break;
    }
} while (opcao != 7);