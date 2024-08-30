let clients = [
  {name: "Reyna", age: 30, city: "Chichén Itzá, ME"},
  {name: "Viper", age: 36, city: "Seattle, EU"},
  {name: "Killjoy", age: 22, city: "Munique, DE"},
  {name: "Sova", age: 45, city: "Yakutsk, RU"},
  {name: "Raze", age: 25, city: "Salvador, BA"},
]

clients.forEach(client => client.age > 30 && console.log(`Cliente: ${client.name}, idade: ${client.age}, mora em: ${client.city}`))
