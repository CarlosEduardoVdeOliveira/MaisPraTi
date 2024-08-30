const prompt = require("prompt-sync")();

let number = Number(prompt("Digite um número para gerar a tabuada: "));

function generateMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    return (`${number} X ${i} = ${i * number}`);
  }
}

console.log(generateMultiplicationTable(number));