const fs = require('fs');
const path = require('path');

function imprimir_arquivos_largura_foreach(pasta_raiz, exts) {
    f_pastas = [pasta_raiz];
    while (f_pastas.length > 0) {
        let pasta_atual = f_pastas.shift();

        const arquivos_e_pastas = fs.readdirSync(pasta_atual);

        arquivos_e_pastas.forEach((arquivo_ou_pasta) => {
            let caminho = path.join(pasta_atual, arquivo_ou_pasta);
            const stats = fs.statSync(caminho);
            if (stats.isDirectory()) {
                f_pastas.push(caminho);
            }
            else {
                for (ext of exts) {
                    if (caminho.endsWith(ext)) {
                        console.log(caminho);
                        break;
                    }
                }
            }
        })
    }
}

imprimir_arquivos_largura_foreach("raiz",["html", 'js']);
