/* 
1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/
let car = {
  make: "Fiat",
  model: "Punto",
  year: 2012,
  colo: "Vermelho"
}
for (const info in car) {
  console.log(`${info}: ${car[info]}`);
}