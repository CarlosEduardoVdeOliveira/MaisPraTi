/*
15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

let transactions = [
  {type: "Entrada", value: 15_000.0},
  {type: "Saída", value: 5_010.5},
  {type: "Saída", value: 350.7},
  {type: "Entrada", value: 10_500.6},
  {type: "Saída", value: 1_500.5},
];
let balance = 0;
transactions.forEach(transaction => {
  if (transaction.type === "Saída") balance -= transaction.value;
  if(transaction.type === "Entrada") balance += transaction.value;
})
console.log(`Seu saldo final é: R$ ${balance.toFixed(2)}.`);
