// Uma empresa armazena informações sobre as contas a receber de seus clientes. 
// Cada uma dessas contas tem as seguintes informações: número do documento, código do cliente, data de vencimento, 
// data de pagamento, valor da conta e juros. Faça um programa para cadastrar um documento. 
// Se a data de pagamento for maior que a data de vencimento, 
// o programa deve calcular o campo juros da tabela documentos (2% de multa). 
// O programa deve ler informações sobre 10 documentos e, depois, 
// mostrar todos os documentos lidos e o total geral a receber (valor das contas + juros) e a média dos juros.

"Use strict"

const prompt = require("prompt-sync")();

class Documento {
    nr_documento;
    cod_cliente;
    dt_vencimento;
    dt_pagamento;
    vl_conta;
    juros;

    constructor(nr_documento, cod_cliente, dt_vencimento, dt_pagamento, vl_conta, juros) {
        this.nr_documento = nr_documento;
        this.cod_cliente = cod_cliente;
        this.dt_vencimento = dt_vencimento;
        this.dt_pagamento = dt_pagamento;
        this.vl_conta = vl_conta;
        this.juros = juros;
    }
}

let documentos = [];

for (let i = 0; i < 3; i++) {
    let nr_documento = 0, cod_cliente = 0, dt_vencimento = 0, dt_pagamento = 0, vl_conta = 0, juros = 0;

    nr_documento = Number(prompt("Informe o Número do documento: "));
    cod_cliente = Number(prompt("Informe o Código do cliente: "));
    dt_vencimento = (prompt("Informe o Data de vencimento: EX('2020-10-22'): "));
    dt_pagamento = (prompt("Informe o data de pagamento: EX('2020-10-22'): "));
    vl_conta = Number(prompt("Informe o Valor da conta: "));

    let date1 = new Date(dt_vencimento);
    let date2 = new Date(dt_pagamento);

    if (date2 > date1) {
        juros = 2;
    }

    documentos.push(new Documento(nr_documento, cod_cliente, dt_vencimento, dt_pagamento, vl_conta, juros))
}

let soma = 0, cont = 0, media = 0; 
for (let i = 0; i < 3; i++) {
    if (documentos[i].juros == 2) {
        soma += (documentos[i].vl_conta + (documentos[i].vl_conta * 0.2));
        cont++;
        media += documentos[i].vl_conta * 0.2;
    }else{
        soma += documentos[i].vl_conta;
    }
}
console.log("total geral a receber (valor das contas + juros): R$:"+ soma);
console.log("média dos juros: ", media / cont);