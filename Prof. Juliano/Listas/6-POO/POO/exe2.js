const promtp = require('prompt-sync')();

class Figura {

    calcular_area() {
        return undefined;
    }

    calcular_perimetro() {
        return undefined;
    }
}

class Circulo extends Figura{
    constructor(raio){
        super();
        this.raio = raio;
    }

    calcular_area(){
        return (3.14 * (this.raio ** 2));
    }

    calcular_perimetro() {
        return (2 * 3.14 * this.raio);
    }
}

class Quadrado extends Figura{
    constructor(lado){
        super();
        this.lado = lado;
    }

    calcular_area(){
        return (this.lado ** 2);
    }

    calcular_perimetro() {
        return (this.lado * 4);
    }
}

class Retangulo extends Figura{
    constructor(comprimento, altura){
        super();
        this.comprimento = comprimento;
        this.altura = altura;
    }

    calcular_area(){
        return (this.comprimento * this.altura);
    }

    calcular_perimetro() {
        return ((2 * this.comprimento) + (2 * this.altura));
    }
}

let c = new Circulo(1)
let r = new Retangulo(2, 3)
let q = new Quadrado(5)


let figuras = [c, r, q]
for(Figura of figuras){
console.log(Figura.calcular_area(), Figura.calcular_perimetro())
}