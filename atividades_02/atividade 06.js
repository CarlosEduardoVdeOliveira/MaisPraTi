let funcionarios = [
  {name: "Bulma", cargo: "Técnica em manutenção", salario: 2_510.95},
  {name: "Joy", cargo: "Enfermagem", salario: 2_450.26},
  {name: "Goku", cargo: "Serviços Gerais", salario: 1_506.97},
  {name: "Kakashi", cargo: "Professor", salario: 10_645.23},
  {name: "Chichi", cargo: "Cozinheira", salario: 1_506.97},
  {name: "Shikamaru", cargo: "Programador", salario: 5_456.38},
]
for (const funcionario of funcionarios) {
  if (funcionario.salario > 2500) {
    console.log(`Funcionário: ${funcionario.name}, Cargo: ${funcionario.cargo}, Salario: R$ ${funcionario.salario.toFixed(2)}`);
  }
}