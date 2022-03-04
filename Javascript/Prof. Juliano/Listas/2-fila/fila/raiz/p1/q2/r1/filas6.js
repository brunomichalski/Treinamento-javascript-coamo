let fila = []

fila.push(1) // [ 1 ]
fila.push(2) // [ 1, 2 ]
fila.push(3) // [ 1, 2, 3 ]
fila.push(4) // [ 1, 2, 3, 4 ]

console.log(fila) // [ 1, 2, 3, 4 ]

let primeiro = fila.shift()
console.log(primeiro) // [ 1 ]

console.log(fila) // [ 2, 3, 4 ]

primeiro = fila.shift()
console.log(primeiro) // 2
console.log(fila) // [ 3, 4 ]
