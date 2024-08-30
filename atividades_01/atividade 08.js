const prompt = require("prompt-sync")();

let firstValue = Number(prompt("Digite o primeiro valor: "));
let secondsValue = Number(prompt("Digite o segundo valor: "));

function ascendingOrder(firstValue, secondsValue) {
  if (secondsValue < firstValue) {
    return (`${secondsValue} e ${firstValue}`);
  }else{
    return (`${firstValue} e ${secondsValue}`);
  }
}

if (isNaN(firstValue) || isNaN(secondsValue) ||(firstValue === secondsValue)) {
  console.error("Números inválidos ou iguais. Tente novamente.");
}else{
  console.log(`Números em ordem crescente: ${ascendingOrder(firstValue, secondsValue)}`);
}
