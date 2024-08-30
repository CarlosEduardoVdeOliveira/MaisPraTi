const prompt = require("prompt-sync")()
/* 
Exercícios com 'for'

1 - Imprima a sequência de Fibonacci até o 10º termo
Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.
*/
/* let sum = 0;
let auxSum1 = 0;
let auxSum2 = 1; */

/* for (let i = 0; i < 10; i++) {
  sum = auxSum1 + auxSum2;
  auxSum1 = auxSum2;
  auxSum2 = sum;
  console.log(sum);
} */


/* 2 - Verifique se um número é primo
Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
Dica: Um número primo só é divisível por 1 e por ele mesmo.
*/

/* let numeroPrimo = Number(prompt("Digite um numero: "))
let counter = 0;

for (let i = 0; i <= numeroPrimo; i++) {
  if (numeroPrimo % i === 0) {
    counter++;
  }
}
(counter > 2) ? console.log("Não é primo..") : console.log("É primo."); */



/* 3 - Imprima um triângulo de números
Escreva um programa que use um loop for para imprimir um triângulo de números.
Dica: Utilize dois loops for, um dentro do outro.
*/
/* 
for(let row = 1; row <= 4; row++){
  let result = "";
  for (let column = 1; column <= row; column++) {
    result += (column)+" ";
  }
  console.log(result);
}
 */

//Exercícios com 'while' 
/* 4 - Calcule o fatorial de um número
Escreva um programa que use um loop while para calcular o fatorial de um número 
fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120. 
Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.
*/
/* 
let numberFat = Number(prompt("Digite um numero: "));
let i = numberFat;
let result = 1;
while(i > 0){
  if(numberFat === 0){
    console.log(result);
    break;
  }
  result *= i;
  i--;
}
console.log(result);
 */
/* 5 - Inverta os dígitos de um número
Escreva um programa que use um loop while para inverter os dígitos de um número 
fornecido (por exemplo, 1234 deve ser impresso como 4321).
Dica: Use operações de módulo e divisão para extrair os dígitos.
 */



/* 6 - Verifique se um número é palíndromo
Escreva um programa que use um loop while para verificar se um número fornecido
(por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.
Exercícios com 'do while' */

/* 7 - Conte o número de dígitos de um número
Escreva um programa que use um loop do while para contar o número de dígitos de 
um número fornecido (por exemplo, 12345 tem 5 dígitos).
Dica: Use operações de divisão para reduzir o número até que ele seja zero.
*/

/* 
8 - Calcule a soma dos dígitos de um número
Escreva um programa que use um loop do while para calcular a soma dos dígitos de
um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
Dica: Use operações de módulo para extrair os dígitos e depois some-os.
*/

/* 9 - Imprima um padrão de estrela decrescente
Escreva um programa que use um loop do while para imprimir um padrão de estrelas
decrescente.
Dica: Utilize dois loops, um dentro do outro.
*/

/*
10 - Encontre o maior divisor comum (MDC) de dois números
Escreva um programa que use um loop do while para encontrar o maior divisor 
comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir
o maior número pela diferença dos dois números até que ambos sejam iguais.
*/
/* let livro = [
            [1, 0, 15.4, 50],
            [2, 0, 15.5, 50],
            [2, 2, 0, 0],
            [2, 0, 15.4, 10],
            [3, 0, 15.9, 30],
            [3, 1, 0, 20],
            [4, 0, 16.50 ,200],
            [5, 0, 17.00, 100],
            [6, 0, 16.59, 20],
            [6, 2, 0, 0],
            [1, 2, 0, 0],
            [2, 1, 15.6, 0]
] */

let qtdTransacoes = Number(prompt("Digite a quantidade de transações: "));
if(qtdTransacoes <= 0) throw new Error("A quantidade de transações devem ser maior que zero(0).");
let livro = []

for (let i = 0; i < qtdTransacoes; i++) {
  let indiceAcao = Number(prompt("Digite o numero da ação: "));
  if(indiceAcao <= 0) throw new Error("A posição da ação deve ser maior que zero(0).");
  let tipoDeAcao = Number(prompt("Digite se 0 = INSERIR, 1 = MODIFICAR, 2 = DELETAR: "));
  if(tipoDeAcao < 0 || livro[1] > 2) throw new Error("O tipo de ação deve ser 0 = INSERIR, 1 = MODIFICAR, 2 = DELETAR");
  let precoDaAcao = Number(prompt("Digite o preço da ação: "));
  if(precoDaAcao <= 0) throw new Error("A posição da ação deve ser maior que zero(0).");
  let qtdAcao = Number(prompt("Digite a quantidade de Ação: "));
  if(qtdAcao <= 0) throw new Error("A posição da ação deve ser maior que zero(0).");
  livro.push([indiceAcao, tipoDeAcao, precoDaAcao, qtdAcao]);
}
console.log(livro);




