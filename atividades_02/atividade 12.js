let stock = [
  {product: "Café", quantity: 1, minimum: 5},
  {product: "Açúcar", quantity: 2, minimum: 3},
  {product: "Arroz", quantity: 3, minimum: 5},
  {product: "Feijão", quantity: 5, minimum: 5}
];
const updateStock = (stock) => {
  stock.forEach(item => {
    if(item.quantity < item.minimum) {
      item.quantity *= 2;
    }
  })
  return stock;
}

console.log(updateStock(stock));
