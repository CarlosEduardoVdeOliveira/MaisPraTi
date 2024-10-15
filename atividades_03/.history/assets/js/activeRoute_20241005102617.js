// Pega todos os links de navegação
const links = document.querySelectorAll('#nav-menu-list a');
const btnMenuHamburger = document.getElementById("btn-menu-hamburger")
const style 

// Obtém o caminho atual da URL
const currentPath = window.location.pathname;
const sizeScreen = window.screen.width


const screenMin = 1024;

if () {
  //percorre todos os links e verifica se está na rota
  links.forEach(link =>{
    if (link.getAttribute('href') === currentPath){
      link.classList.add('active-menu-link')// Adiciona a classe 'active' ao link da rota atual
    }
  })
}else{
  //percorre todos os links e verifica se está na rota
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active'); // Adiciona a classe 'active' ao link da rota atual
    }
  });
}