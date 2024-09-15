let orders = [
  {customer: "Jaques", product: "livro", numberOfOrders: 2},
  {customer: "Edu", product: "Lapis de colori", numberOfOrders: 3},
  {customer: "Edu", product: "Caderno de desenho", numberOfOrders: 4},
  {customer: "Hyago", product: "Caderno", numberOfOrders: 5},
  {customer: "Jaques", product: "Caneta marca texto", numberOfOrders: 1},
  {customer: "Hyago", product: "Lapiseira", numberOfOrders: 2},
]

let filterOrdersPerPerson = (orders) => {
  let totalProductsByCustomer = {}
  orders.forEach(order => {
    if (totalProductsByCustomer[order.customer]) {
      totalProductsByCustomer[order.customer] += order.numberOfOrders;
    } else {
      totalProductsByCustomer[order.customer] = order.numberOfOrders;
    }
  });
  return totalProductsByCustomer;
};

let orderPerson = filterOrdersPerPerson(orders);
console.log(orderPerson);

