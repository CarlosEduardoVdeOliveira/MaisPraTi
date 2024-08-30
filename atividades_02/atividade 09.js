/*
9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/
let clients = [
  {name: "Omen", age: 90, city: ""},
  {name: "Yoru", age: 25, city: ""},
  {name: "Kille Joy", age: 19, city: ""},
  {name: "Sova", age: 45, city: ""},
  {name: "Raze", age: 30, city: "Salvador, BA"},
]

clients.forEach(client => client.age > 30 && console.log(`Cliente: ${client.name}, idade: ${client.age}, mora em: ${client.city}`))
