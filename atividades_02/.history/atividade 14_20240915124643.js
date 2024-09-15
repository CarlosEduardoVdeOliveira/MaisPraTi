const empresa = {
  departamentos: [
    {
      nome: "Recursos Humanos",
      funcionarios: [
        {nome: "Ana", cargo: "Gerente de RH", salario: 7000},
        {nome: "João", cargo: "Assistente de RH", salario: 3000}
      ]
    },
    {
      nome: "Tecnologia",
      funcionarios: [
        {nome: "Carlos", cargo: "Desenvolvedor Front-end", salario: 6000},
        {nome: "Maria", cargo: "Desenvolvedora Back-end", salario: 6500}
      ]
    },
    {
      nome: "Financeiro",
      funcionarios: [
        {nome: "Pedro", cargo: "Analista Financeiro", salario: 5500},
        {nome: "Luana", cargo: "Contadora", salario: 7000}
      ]
    }
  ]
};

// Iterar sobre os departamentos e seus funcionários
for (const departamento of empresa.departamentos) {
  console.log(`Departamento: ${departamento.nome}`);
  
  for (const funcionario of departamento.funcionarios) {
    console.log(`- Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
  }
}