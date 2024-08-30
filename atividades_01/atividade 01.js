const prompt = require("prompt-sync")()
/*
1. Escreva um programa que recebe um número inteiro e verifica se ele 
é par ou ímpar utilizando uma estrutura de controle if.
*/
const number = Number(prompt("Digite um numero para verificar se é par ou ímpar: "));
function checkEvenOrOdd(number){
  if (isNaN(number)) {
    console.error("Por favor, insira um número válido.");
  }
  return `O número ${number} é ${number % 2 === 0 ? "par" : "ímpar"}!`
}
console.log(checkEvenOrOdd(number));
