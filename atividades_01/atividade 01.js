const prompt = require("prompt-sync")()
const number = Number(prompt("Digite um numero para verificar se é par ou ímpar: "));

function checkEvenOrOdd(number){
  if (isNaN(number)) {
    console.error("Por favor, insira um número válido.");
  }
  return `O número ${number} é ${number % 2 === 0 ? "par" : "ímpar"}!`
}
console.log(checkEvenOrOdd(number));
