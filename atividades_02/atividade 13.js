let shoppingCart = {
  items:[
    {name: "Vara de Pesca", quantity: 2, unitPrice: 113.98},
    {name: "Molinete", quantity: 2, unitPrice: 556.68},
    {name: "Isca Artificial", quantity: 6, unitPrice: 59.99}
  ]
}

let cart = (shoppingCart) => {
  let total = 0;
  shoppingCart.items.forEach(item =>{
    total += item.quantity * item.unitPrice
  })
  return total;
}
let totalCart = cart(shoppingCart);
console.log(`Total a pagar: R$ ${totalCart.toFixed(2)}`);
