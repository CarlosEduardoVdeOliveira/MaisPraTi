const prompt = require("prompt-sync")();
/* let numbers = [5,7,9,5, 8, 0.5];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log("A somas dos itens do array é "+sum);
let max = numbers[0];
for (let num of numbers) {
    if (num > max) {
      max = num;
    }
}
console.log(max);

let reversed = [];
for (let n = numbers.length -1; n >= 0 ; n--) {
  reversed.push(numbers[n])
} */
// rever essa logica
/* for (let n = 0; n < numbers.length; n++) {
  reversed[n] = numbers[numbers.length-1]
  numbers.pop(numbers[numbers.length-1])
} */
/* console.log(reversed);

let parNumbers = [];
for (let n of numbers) {
  if (n % 2 === 0) {
    parNumbers.push(n)
  }
}
console.log(parNumbers);
let num = Number(prompt("Digite o numero: "))
let counter = 0;
for (let u of numbers) {
  if (num === u) {
    counter++;
  }
}
console.log(`A quantidade de ocorrência do numero ${num} é ${counter}`); */

/* let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9 ]
]

for (let row = 0; row < matriz.length; row++) {
  for (let column = 0; column < matriz[row].length; column++) {
    console.log(`Elemento na posição [${row}][${column}]: ${matriz[row][column]}`)
  }
} */

let matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let matriz2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
]
let sumMatriz = []

if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2.length)
  throw new Error("Erro de dimensão de matrizes divergentes")

for (let i = 0; i < matriz1.length; i++) {
  let sumRow = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      sumRow.push(matriz1[i][j] + matriz2[i][j]);
    }
    sumMatriz.push(sumRow);
}
console.table(sumMatriz);

let sumDigonal = 0;
for (let row = 0; row < matriz1.length; row++) {
  for (let column = 0; column < matriz1[row].length; column++) {
    if (matriz1[row] === matriz1[column]) {
      sumDigonal += matriz1[row][column]
    }
  }  
}
console.log(sumDigonal);

/* 
Trainee: Está testando a profissão. Você provavelmente está aqui se não faz faculdade de tecnologia ou está aprendendo algo muito novo.
Júnior: Não abstrai o problema, mas segue a galera. Se você faz faculdade de tecnologia ou um curso. Até uns ~2 anos de experiência.
Pleno: Abstrai o problema, mas não abstrai a solução completamente. Até ~5 anos de experiência.
Sênior: Abstrai a solução. Mais de ~5 anos de experiência.
Master: Abstrai somente um contexto para a solução. Mais de 10 anos, mas tem
https://www.codelift.com.br
*/
