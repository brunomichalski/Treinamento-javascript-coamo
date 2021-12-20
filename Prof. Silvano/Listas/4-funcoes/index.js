///Funções////////////////////////
/////////////////////////////////

function exec01(n1, n2, n3) {
    let maior1 = Math.max(n1, Math.max(n2, n3));
    let maior2 = Math.min(n1, Math.min(n2,n3));
    let menor1 = maior2;

    Number(maior1);
    Number(maior2); 
    maior2 = ((n1+n2+n3) - maior1) - maior2;

    console.log("-----Exercício 01-----");
    console.log("A) Soma dos dois maiores números é: "+ (maior1 + maior2));
    console.log("B) A multiplicação dos menores números é: "+ (maior2 * menor1));
    console.log();
}

function exec02(n1, n2) {
    let valor1 = n1 * n1;
    let valor2 = n2 * n2;
    let soma = valor1 + valor2;
    let DivR = n1 / n2;
    let DivInt = n1 % n2;

    console.log("-----Exercício 02-----");
    console.log("A) Soma dos valores ao quadrado é: "+ soma)
    console.log("B) A divisão real é: "+ DivR);
    console.log("C) O Resto da divisão é: "+ DivInt);
    console.log();
}

function exec03(n1) {
    console.log("-----Exercício 03-----");
    console.log("Expressão: X + 10x * 2/3")
    console.log("A) Resultado da expressão:"+ (n1 + (10*n1) * (2/3)));
    console.log();
}

function exec04(n1) {
    console.log("-----Exercício 04-----");
    console.log("Expressão: 1/2X2 + 5X + 4")
    console.log("A) Resultado da expressão:"+ ((0.5*n1)* 2 + (5*n1) + 4));
    console.log();
}

function exec05(n1) {
    let Pi = Math.PI;
    let Rad = n1 * (Pi * 180);

    console.log("-----Exercício 05-----");
    console.log(Pi);
    console.log();
    
}

function print_table(n1) {
    console.log("-----Exercício 06-----");
    console.log(n1 + " X 1 = "+ (n1*1));
    console.log(n1 + " X 2 = "+ (n1*2));
    console.log(n1 + " X 3 = "+ (n1*3));
    console.log(n1 + " X 4 = "+ (n1*4));
    console.log(n1 + " X 5 = "+ (n1*5));
    console.log(n1 + " X 6 = "+ (n1*6));
    console.log(n1 + " X 7 = "+ (n1*7));
    console.log(n1 + " X 8 = "+ (n1*8));
    console.log(n1 + " X 9 = "+ (n1*9));
    console.log(n1 + " X 10 = "+ (n1*10));
    console.log();
    
}
function exec07() {
    console.log("-----Exercício 07-----");
    let ret = ((Math.random() * 11).toFixed(0));
    return ret;
}

function exec08() {
    console.log("-----Exercício 08-----");
    let ret = (((Math.random() * 40) + 20).toFixed(0));
    return ret;
}

function exec09(max, min) {
    console.log("-----Exercício 09-----");
    let ret = ((Math.random() * (max - min)) + min).toFixed(0);
    return ret;
}

function exec10() {
    console.log("-----Exercício 10-----");
    let ret = Math.trunc(Math.random() * 10) * 10 + 10;

   
    //((Math.random() * (max - min)) + min).toFixed(0);
    return ret;
}

function exec11() {
    function print_border() {
        console.log("X----------X");
    }

    function print_middle() {
        console.log(`|          |`)
    }

    function print_boxes() {
        console.log("3 boxes")
        print_border();
        print_middle();
        print_middle();
        print_middle();
        print_border();
        console.log();
        print_border();
        print_middle();
        print_middle();
        print_middle();
        print_border();
        console.log();
        print_border();
        print_middle();
        print_middle();
        print_middle();
        print_border();
        console.log();
    }

    console.log("-----Exercício 11-----");
    console.log("1 box")
    print_border();
    print_middle();
    print_middle();
    print_middle();
    print_border();
    console.log();
    console.log("------------------------------------------");
    console.log();

    print_boxes();    
}

///Chamada das funções//////////////
///////////////////////////////////

exec01(2, 1, 3);

exec02(5, 2);

exec03(2);

exec04(2);

exec05(90);

print_table(5);

let res07 = exec07();
console.log(res07);
console.log();

let res08 = exec08();
console.log(res08);
console.log();

let res09 = exec09(60, 20);
console.log(res09);
console.log();

let res10 = exec10();
console.log(res10);
console.log();

exec11();
