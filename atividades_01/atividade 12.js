const prompt = require("prompt-sync")()
/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo 
usuário (de 1 a 10) utilizando um loop for.
*/

let number = Number(prompt("Digite um número para gerar a tabuada: "));
function generateMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    return (`${number} X ${i} = ${i * number}`);
  }
}
console.log(generateMultiplicationTable(number));