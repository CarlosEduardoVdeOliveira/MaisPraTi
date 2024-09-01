let sales = [
  {product: "Camisa do Batman", amount: 5, value: 55.99},
  {product: "Short", amount: 15, value: 82.96},
  {product: "Calça jeans", amount: 3, value: 150.0},
  {product: "Jaqueta de couro", amount: 1, value: 231.5},
  {product: "Camiseta", amount: 24, value: 35.8},
  {product: "Tênis Nike", amount: 2, value: 549.51},
]
let messageTotalPerProduct = (sales) => {
  let total = 0
  sales.forEach(sale => {
    total += sale.amount * sale.value;
    return console.log(`Produto: ${sale.product}, total de vendas por produto: ${total.toFixed(2)}`);
  });
}
messageTotalPerProduct(sales)
