let persons = [
  {name: "Maria", age: 65, city: "Saquarema, RJ"},
  {name: "Rogério", age: 45, city: "Nova Iguaçu, RJ"},
  {name: "Fernanda", age: 38, city: "Saquarema, RJ"},
  {name: "Clara", age: 1, city: "Saquarema, RJ"},
  {name: "Igor", age: 32, city: "Araçuaí, MG"},
  {name: "Luíza", age: 8, city: "Saquarema, RJ"},
  {name: "Carlos", age: 33, city: "Araçuaí, MG"},
]

for (const person of persons) {
  console.log(`Nome: ${person.name}, idade: ${person.age} anos, morador(a) de: ${person.city}`);
}