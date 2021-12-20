'use strict'

let fs = require('fs');
const prompt = require('prompt-sync')();

const agenda = 'agenda.json';

function carrega_contatos() {
    let info = fs.readFileSync(agenda);
    return JSON.parse(info);
}

function salvar_contato() {
    let str = JSON.stringify(contatos);
    fs.writeFileSync(agenda, str);
}

function cad_contato() {
    let nome = '';
    let telefone = '';

    while (nome == '') {
        nome = prompt("Informe o Nome: ");
    }

    while (telefone == '') {
        telefone = prompt("Informe o Telefone: ");
    }

    contatos.push({ nome, telefone });
    console.log(`O telefone do ${nome} foi Cadastrado com Sucesso!`);
    salvar_contato();
}

function buscar_contato() {
    let nome = '';
    while (nome == '') {
        nome = prompt("Informe o nome que deseja saber o número: ");
    }

    let encontrados = contatos.filter((contato) => contato['nome'] == nome)

    if (encontrados.length == 0) {
        console.log(`O contato ${nome} não foi encontrado!`);
    } else {
        if (encontrados.length == 1) {
            console.log(`O telefone do(a) ${nome} é ${encontrados[0]['telefone']}`);
        } else {
            console.log(`Foram encontrados ${encontrados.length} telefones do(a) ${nome}: `);
            for (const contato of encontrados) {
                console.log(`\t ${contato['telefone']}`);
            }
        }
    }
}

function remove_contato() {
    let nome = '';

    while (nome == '') {
        nome = prompt("Informe o nome do contato que deseja remover: ");
    }

    let tam_inicio = contatos.length;
    contatos = contatos.filter((contato) => contato['nome' != nome]);
    if (tam_inicio != contatos.length) {
        console.log(`Foram removidos ${tam_inicio -  contatos.length} números do(a) ${nome}.`);
        salvar_contato()
    }else{
        console.log(`Não foi encontrado nenhum contato do(a) ${nome}.`);
    }
}

function menu() {
    let opcao = '';
    while (opcao != 4) {
        console.log(`Agenda Telefônica - ${contatos.length} contatos cadastrados.`);
        console.log("1 - Cadastrar novo contato");
        console.log("2 - buscar telefone por nome");
        console.log("3 - remover contato da agenda");
        console.log("4 - sair\n");
        opcao = prompt("Informe operação: ");

        switch (opcao) {
            case '1':
                cad_contato();
                break;
            case '2':
                buscar_contato();
                break;
            case '3':
                remove_contato()
                break;
            case '4':
                console.log("finalizado.");
                break;

            default:
                console.log("valor invalido.")
        }
    }
}
let contatos =  carrega_contatos()

menu()