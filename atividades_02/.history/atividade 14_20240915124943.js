let enterprise = {
  name: "KiauTech",
  departments: [
    {departmentName: "Suporte Técnico", listOfEmployees: ["Ana", "Rafael", "Camila"]},
    {departmentName: "Desenvolvimento", listOfEmployees: ["Carlos", "Maria", "João"]},
    {departmentName: "Recursos Humanos", listOfEmployees: ["Paula", "Fernanda", "Lucas"]},
  ]
};

function getDepartment() {
  for (const department of enterprise.departments) {
    for (const employee of department.listOfEmployees) {
      console.log(`${employee} do departamento de: ${department.departmentName}`);
    }
  }
}

getDepartment();
