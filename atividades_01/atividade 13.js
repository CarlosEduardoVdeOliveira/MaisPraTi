const prompt = require("prompt-sync")()

function calculateAverage() {
  let sum = 0;
  let count = 0;
  let number;
  while (number !== 0) {
    number = Number(prompt("Digite um número, ou zero para sair: "));
    if (!isNaN(number) && number !== 0) {
      sum += number;
      count++
    }else if (isNaN(number)) {
      return console.log("Número inválida.");
    }
  };
  return  count > 0 ? (sum / count).toFixed(2) : "Nenhum número foi inserido.";
}
console.log(`A média dos números é: ${calculateAverage()}`);