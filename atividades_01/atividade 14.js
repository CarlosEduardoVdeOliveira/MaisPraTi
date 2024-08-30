const prompt = require("prompt-sync")()
/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo 
usuário utilizando um loop for ou while.
*/
let number = Number(prompt("Digite um número para saber o fatorial: "))
function factorial(number) {
  let i = 1;
  let resultFactorial = 1;
  while (i <= number) {
    resultFactorial *= i;
    i++
  }
  return resultFactorial;
}
console.log(`${number}! = ${factorial(number)}`);