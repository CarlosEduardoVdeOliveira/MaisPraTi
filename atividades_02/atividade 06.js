/*
6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

let funcionarios = [
  {name: "Bulma", cargo: "Técnica em manutenção", salario: 2_510.95},
  {name: "Joy", cargo: "Técnica em enfermagem", salario: 2_450.26},
  {name: "Goku", cargo: "Serviços Gerais", salario: 1_506.97},
  {name: "Kakashi", cargo: "Professor", salario: 10_645.23},
  {name: "Chichi", cargo: "Cozinheira", salario: 1_506.97},
  {name: "Gohan", cargo: "Programador", salario: 5_456.38},
]
for (const funcionario of funcionarios) {
  if (funcionario.salario > 2500) {
    console.log(`Funcionário: ${funcionario.name}, Cargo: ${funcionario.cargo}, Salario: R$ ${funcionario.salario.toFixed(2)}`);
  }
}