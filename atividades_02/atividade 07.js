let products = [
  {name: "Controle", price: 99.89, discount: 15},
  {name: "Cama", price: 1_499.99, discount: 10},
  {name: "Geladeira", price: 3_899.99, discount: 5},
  {name: "Tablet", price: 599.99, discount: 23},
]
products.forEach(product =>{
  product.discount = 0.10
  product.price -= product.discount * product.price
  console.log(`Produto: ${product.name}. Promoção: ${product.price}`);
});
