const random = require('random')

class Cliente{
    min_chegada = 0
    tempo_de_uso = 0

    constructor(minuto_chegou){
        this.min_chegada = minuto_chegou
        this.tempo_de_uso = random.int(1, 3)
    }
}

class SimulacaoCaixaEletronico{
    tempo_total_espera = 0
    clientes_atendidos = 0
    fila_clientes = []

    //retorna quantos clientes chegaram
    //50% das vezes retorna 0
    //40% das vezes retorna 1
    //10% das vezes retorna 2
    novos_clientes(){
        let n = random.int(1,10)
        if(n <= 5)
            return 0
        if(n <= 9)
            return 1
        return 2
    }

    simular(){
        let prox_minuto_caixa_disponivel = 0
        for(let minuto = 0; minuto < 60; minuto++){
            let n_clientes_chegaram = this.novos_clientes()
            for(let i = 0; i < n_clientes_chegaram; i++){
                this.fila_clientes.push(new Cliente(minuto))
            }
            if((this.fila_clientes.length > 0) 
                    && (prox_minuto_caixa_disponivel <= minuto) ){

                let cliente_atual = this.fila_clientes.shift()
                prox_minuto_caixa_disponivel = minuto + cliente_atual.tempo_de_uso
                let cliente_aguardou = minuto - cliente_atual.min_chegada
                this.tempo_total_espera += cliente_aguardou
                this.clientes_atendidos++
            }
        }
    }

    mostrar_estatísticas(){
        console.log("Número de cliente atendidos " + this.clientes_atendidos + ".")
        let tempo_de_espera_medio = (this.tempo_total_espera / this.clientes_atendidos)
        tempo_de_espera_medio = tempo_de_espera_medio.toFixed(2)
        console.log("O tempo médio de espera foi de " + tempo_de_espera_medio + " minutos.")
        console.log("Restaram " + this.fila_clientes.length + " clientes na fila.")
    }

}

function montecarlo(n) {
    let soma_clientes_atendidos = 0;
    let soma_espera_tempo_medio = 0;
    let soma_clientes_restantes = 0;
    for (let i = 0; i < n; i++) {
        let simulacao = new SimulacaoCaixaEletronico();
        simulacao.simular();
        soma_clientes_atendidos += simulacao.clientes_atendidos;
        tempo_de_espera_medio = (simulacao.tempo_total_espera / simulacao.clientes_atendidos);
        soma_espera_tempo_medio += tempo_de_espera_medio;
        soma_clientes_restantes += simulacao.fila_clientes.length;
    }
    return{
        media_clientes_atendidos : soma_clientes_atendidos / n,
        media_tempo_espera_medio : soma_espera_tempo_medio / n,
        media_clientes_restantes : soma_clientes_restantes / n
    }
}

let res = montecarlo(1000);
console.log(res);
