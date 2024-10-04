// Pega todos os links de navegação
const linksMenu = document.querySelectorAll('.header__nav--list-item-link');
const linksMenuHamburger = document.querySelectorAll(".menu__hamburger--container--list-item-link")

// Obtém o caminho atual da URL
const currentPath = window.location.pathname;
const sizeScreen = window.screen.width


const screenMin = 768;

if (sizeScreen <= screenMin) {
  //percorre todos os links e verifica se está na rota
  linksMenuHamburger.forEach(link =>{
    if (link.getAttribute('href') === currentPath){
      link.classList.add('active-menu-link')// Adiciona a classe 'active' ao link da rota atual
    }
  })
}else{
  //percorre todos os links e verifica se está na rota
  linksMenu.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active'); // Adiciona a classe 'active' ao link da rota atual
    }
  });
}