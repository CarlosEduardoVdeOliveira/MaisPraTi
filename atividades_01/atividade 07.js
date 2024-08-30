const prompt = require("prompt-sync")()
/* 
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25
se forem compradas pelo menos doze. Escreva um algoritmo que leia o número 
de maçãs compradas, calcule e escreva o valor total da compra.
*/

let amountOfApples = Number(prompt("Digite a quantidade de maçãs: "));
function totalCostOfPurchasingApples(amount) {
  if (amount < 12) {
    return (amount * 0.30).toFixed(2)
  }else{
    return (amount * 0.25).toFixed(2)
  }
}

if (amountOfApples <= 0 || isNaN(amountOfApples)) {
  console.error("Números de maçãs inválido.");
}else{
  console.log(`O preço total da compra é: R$ ${totalCostOfPurchasingApples(amountOfApples)}.`);
}