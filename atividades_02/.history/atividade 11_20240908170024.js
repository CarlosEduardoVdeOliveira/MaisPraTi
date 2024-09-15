/* 
11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/
let orders = [
  {customer: "Jaques", product: "livro", numberOfOrders: 2},
  {customer: "Edu", product: "Lapis de colori", numberOfOrders: 3},
  {customer: "Edu", product: "Caderno de desenho", numberOfOrders: 4},
  {customer: "Hyago", product: "Caderno", numberOfOrders: 5},
  {customer: "Jaques", product: "Caneta marca texto", numberOfOrders: 1},
  {customer: "Hyago", product: "Lapiseira", numberOfOrders: 2},
]

let newOrders = {}
let filterOrdersPerPerson = (orders) => {
  orders.forEach((order) => {
    let auxOrder =  orders[0];
    if (au) {
      
    }
    
  });
  return newOrders;
};

let orderPerson = filterOrdersPerPerson(orders);
console.log(orderPerson);

