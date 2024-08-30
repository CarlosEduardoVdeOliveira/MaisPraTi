const prompt = require("prompt-sync")();

function requestNumbers(){
  let numbers = [];
  let numberOfTimesToLoop = 5;
  for (let i = 1; i <= numberOfTimesToLoop; i++) {
    let number = Number(prompt(`Digite o ${i}º numero: `));
    if (isNaN(number)) {
      return console.error("Número inválido. Tente novamente.");
    }
    numbers.push(number);
  }
  return (numbers);
}

function sumNumber(){
  let arrNumbers = requestNumbers();
  let sum = 0;
  for (const number of arrNumbers) {
    sum += number;
  }
  return sum;
}

console.log(`A soma dos números é: ${sumNumber()}`);