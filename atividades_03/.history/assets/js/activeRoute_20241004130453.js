// Pega todos os links de navegação
const links = document.querySelectorAll('.header__nav--list-item-link');

const linksMenuHamburger = document.querySelectorAll(".menu__hamburger--container--list-item-link")

// Obtém o caminho atual da URL
const currentPath = window.location.pathname;
const sizeScreen = window.screen.width


// Percorre os links e verifica se o href corresponde ao pathname atual
/* navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    //link.classList.add('active'); // Adiciona a classe 'active' ao link da rota atual
  }
}); */

linksMenuHamburger.forEach(link =>{
  if (link.getAttribute('href') === currentPath){
    link.classList.add('active-menu-link')
  }
})
/* liLinks.forEach(liLink =>{
  if (liLink.getAttribute('href') === currentPath){
    console.log(liLink);
    liLink.classList.add('active-menu'); 
  }
}) */