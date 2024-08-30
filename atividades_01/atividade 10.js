const prompt = require("prompt-sync")()
/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 
vezes. */
let number = parseInt(prompt("Digite um número: "))
function writeANumberTenTimes(number) {
  for (let i = 0; i < 10; i++) {
    console.log(number);
  }
}
if (isNaN(number)) {
  console.error("Número inválido. Tente novamente.");
}else{
  writeANumberTenTimes(number);
}