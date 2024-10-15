// Pega todos os links de navegação
const navLinks = document.querySelectorAll('.header__nav--list-item-link');
const link
// Obtém o caminho atual da URL
const currentPath = window.location.pathname;
const sizeScreen = window.screen.width


// Percorre os links e verifica se o href corresponde ao pathname atual
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active'); // Adiciona a classe 'active' ao link da rota atual
  }
});

if(sizeScreen <= 700 ){
  link.classList.add('active-menu');
}