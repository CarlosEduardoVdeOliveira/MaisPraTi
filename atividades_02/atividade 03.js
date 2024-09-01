let product = {
  price: 150,
  weight: 50,
  height: 30,
  width: 20,
  quantity: 10
};

let filterProperties = (product, value) => {
  let newProducts = {};
  for (const property in product) {
    if (product[property] > value) {
      newProducts[property] = product[property];
    }
  }
  return newProducts;
};

let filter = filterProperties(product, 30);
console.log(filter);


