const promtp = require('prompt-sync')();

class Endereco {
    constructor(logradouro, numero, cep, cidade, estado) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
    }

    get_logradouro() {
        return this.logradouro;
    }
    get_numero() {
        return this.numero
    }
    get_cep() {
        return this.cep
    }
    get_cidade() {
        return this.cidade
    }
    get_estado() {
        return this.estado
    }

    toString() {
        return `${this.logradouro}, ${this.numero}, ${this.cep}, ${this.cidade}, ${this.estado} -`
    }
}

class EnderecoApartamento extends Endereco {
    constructor(apartamento, andar, logradouro, numero, cep, cidade, estado) {
        super(logradouro, numero, cep, cidade, estado)
        this.apartamento = apartamento;
        this.andar = andar;
        this.bloco = "";
    }

    get_apartamento() {
        return apartamento;
    }

    get_andar() {
        return andar;
    }

    get_bloco() {
        return bloco;
    }

    toString() {
        let end = super.toString();
        if (this.bloco == '') {
            return ` ${end} ${this.apartamento}, ${this.andar}!`;
        } else {
            return ` ${end} ${this.apartamento}, ${this.andar}, ${this.bloco}.`;
        }
    }
}

let end = new EnderecoApartamento();

end.logradouro = "Rua Brasil";
end.numero = '400';
end.cep = "XXXXX-XXX";
end.cidade = "Campo Mourão";
end.estado = "PR";
end.apartamento = "1";
//end.bloco = "2";
end.andar = "3";

console.log(end.toString());
