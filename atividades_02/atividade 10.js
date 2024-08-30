/*
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let vendas = [
  {product: "Camisa do Batman", qt: 5, value: 55.99},
  {product: "Short", qt: 15, value: 82.96},
  {product: "Calça jeans", qt: 3, value: 150.0},
  {product: "Jaqueta de couro", qt: 1, value: 231.5},
  {product: "Camiseta", qt: 24, value: 35.8},
  {product: "Tênis Nike", qt: 2, value: 549.51},
]
let total = 0
vendas.forEach(venda => {
  total += venda.qt * venda.value;
  console.log(`Produto: ${venda.product}, total de vendas por produto: ${total.toFixed(2)}`);
})