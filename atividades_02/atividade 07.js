/*
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

let products = [
  {name: "Controle", price: 99.89, desconto: 15},
  {name: "Cama", price: 1_499.99, desconto: 10},
  {name: "Geladeira", price: 3_899.99, desconto: 5},
  {name: "Tablet", price: 599.99, desconto: 23},
]
products.forEach(product =>{
  product.desconto = 0.10
  product.price -= product.desconto * product.price
  console.log(`Produto: ${product.name}. Promoção: ${product.price}`);
});
