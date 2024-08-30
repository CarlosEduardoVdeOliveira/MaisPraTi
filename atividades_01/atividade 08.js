const prompt = require("prompt-sync")()
/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos 
valores iguais) e escreve-los em ordem crescente.
*/
let firstValue = Number(prompt("Digite o primeiro valor: "))
let secondsValue = Number(prompt("Digite o segundo valor: "))

function ascendingOrder(firstValue, secondsValue) {
  if (secondsValue < firstValue) {
    return (`${secondsValue} e ${firstValue}`)
  }else{
    return (`${firstValue} e ${secondsValue}`)
  }
}
if (isNaN(firstValue) || isNaN(secondsValue) ||(firstValue === secondsValue)) {
  console.error("Números inválidos ou iguais. Tente novamente.");
}else{
  console.log(`Números em ordem crescente: ${ascendingOrder(firstValue, secondsValue)}`);
}
