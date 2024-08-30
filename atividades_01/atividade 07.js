const prompt = require("prompt-sync")();

let amountOfApples = Number(prompt("Digite a quantidade de maçãs: "));

function totalCostOfPurchasingApples(amount) {
  if (amount < 12) {
    return (amount * 0.30).toFixed(2);
  }else{
    return (amount * 0.25).toFixed(2);
  }
}

if (amountOfApples <= 0 || isNaN(amountOfApples)) {
  console.error("Números de maçãs inválido.");
}else{
  console.log(`O preço total da compra é: R$ ${totalCostOfPurchasingApples(amountOfApples)}.`);
}