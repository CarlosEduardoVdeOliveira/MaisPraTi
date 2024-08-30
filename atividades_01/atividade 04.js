const prompt = require("prompt-sync")()
/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de 
três opções. Utilize switch-case para implementar a lógica de cada opção 
selecionada. 
*/
function showMenu() {
  console.log("********** MENU **********");
  console.log("        Pagina home: 1");
  console.log("        Pagina sobre: 2");
  console.log("      Pagina projetos: 3");
  console.log("           Sair: 0");
  console.log("**************************");
}
let exit = false;
function menu(){
  while(!exit){
    showMenu()
    const select = Number(prompt("Escolha um numero de 0 a 3 do menu: "))
    switch (select) {
      case 1:
        console.log("\nPagina: Home \n");
      break;
      case 2:
        console.log("\nPagina: Sobre \n");
      break;
      case 3:
        console.log("\nPagina: Projetos \n");
      break;
      case 0:
        console.log("\nSaindo... \n");
        exit = true
      break;
      default:
        console.log("\nValor inválido. \n");      
      break;
    }
  }
}
menu()