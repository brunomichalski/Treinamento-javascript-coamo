/*
Escreva um programa que imprime:
a.Um número fracionário aleatório entre [0 e 1), comduas casas decimais;
    b.Um número aleatório inteiro entre [0 e 1];
    c.Um número aleatório inteiro entre [0 e 50];
    d.Uma dezena aleatória inteira entre [10 e 90];
    e.Um número aleatório inteiro entre [-10 e 10];
*/

console.log(Math.random().toFixed(2));
console.log(Math.trunc(Math.random() * 2));
console.log(Math.trunc(Math.random() * 51));
console.log(Math.trunc(Math.random() * 9) * 10 + 10);
console.log(Math.trunc(Math.random() * 21)-10);