// Seleciona todos os links e divs
const links = document.querySelectorAll('.about__link');
const sections = document.querySelectorAll('.content__about');

// Função para ativar a seção e link correspondentes
function activateSection(sectionId, link) {
  // Remove a classe active de todas as seções e links
  sections.forEach(section => section.classList.remove('activeLink'));
  links.forEach(link => link.classList.remove('active'));

  // Ativa a seção e link clicados
  document.getElementById(sectionId).classList.add('activeLink');
  link.classList.add('active');
}

// Adiciona o evento de clique para cada link
links.forEach(link => {
  link.addEventListener('click', function() {
    const sectionId = this.getAttribute('id');
    activateSection(sectionId, this);
  });
});
