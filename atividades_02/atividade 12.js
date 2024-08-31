/*
12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let stock = [
  {product: "Café", quantity: 1, minimum: 5},
  {product: "Açúcar", quantity: 2, minimum: 3},
  {product: "Arroz", quantity: 3, minimum: 5},
  {product: "Feijão", quantity: 5, minimum: 5}
];
const updateStock = (stock) => {
  let newItem;
  let newStock = {};
  stock.forEach(item => {
    while(item.quantity < item.minimum) {
      newItem = item.quantity *= 2;
    }
  })
  newStock = [...stock, newItem];
  return newStock; 
}

console.log(updateStock(stock));
